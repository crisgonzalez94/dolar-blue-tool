import { Component, OnInit } from '@angular/core';

//Services
import { ExchangeHousesService } from 'src/app/services/exchange-houses.service';
import { ExchangeValueService } from 'src/app/services/exchange-value.service';

//Interfaces
import { Divisa } from 'src/app/interfaces/interfaces';
import { ExchangeValue } from 'src/app/interfaces/interfaces';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { HouseModalPage } from '../house-modal/house-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  //Variables of Inputs and selects
  convertFrom_input:number;
  convertTo_display:number = 0;
  convertFrom_select: string = 'pesos';

  //It is for saving the current value of diferent values of dollar
  blueBuy: number;
  blueSell: number;
  oficialBuy: number;
  oficialSell: number;
  operation: string = 'venta';
  divisa: string = 'AR$';

  constructor( private exchangeHousesService : ExchangeHousesService , private exchangeValueService : ExchangeValueService  , private modalController: ModalController ) { }

  ngOnInit() {

    this.getValues();


  }


  convert(event){

    this.convertTo_display = 0;

    if(this.operation == 'compra'){
      console.log("COMPRA");
      switch(this.convertFrom_select){
        case 'pesos':
          this.convertTo_display = Math.trunc(this.convertFrom_input * (1 / this.blueBuy));
          this.divisa = 'US$';
          break;
        case 'blue':
          this.convertTo_display = Math.trunc(this.convertFrom_input * this.blueBuy);
          this.divisa = 'AR$';
          break;
      }
    }else if(this.operation == 'venta'){
      switch(this.convertFrom_select){
        case 'pesos':
          this.convertTo_display = Math.trunc(this.convertFrom_input * (1 / this.blueSell));
          this.divisa = 'US$';
          break;
        case 'blue':
          this.convertTo_display = Math.trunc(this.convertFrom_input * this.blueSell);
          this.divisa = 'AR$';
          break;
      }
    }

    this.reziseText();


  }


  reziseText(){
    if(document.getElementById('convertTo_display').textContent.length < 5){
      document.getElementById('convertTo_display').classList.add('text-big');
      document.getElementById('convertTo_display').classList.remove('text-medium');
      document.getElementById('convertTo_display').classList.remove('text-small');
      document.getElementById('convertTo_display').classList.remove('text-too-small');
    }
    else if(document.getElementById('convertTo_display').textContent.length > 5 && document.getElementById('convertTo_display').textContent.length < 7){
      document.getElementById('convertTo_display').classList.remove('text-big');
      document.getElementById('convertTo_display').classList.add('text-medium');
      document.getElementById('convertTo_display').classList.remove('text-small');
      document.getElementById('convertTo_display').classList.remove('text-too-small');
    }else if(document.getElementById('convertTo_display').textContent.length > 7 && document.getElementById('convertTo_display').textContent.length < 11){
      document.getElementById('convertTo_display').classList.remove('text-big');
      document.getElementById('convertTo_display').classList.remove('text-medium');
      document.getElementById('convertTo_display').classList.add('text-small');
      document.getElementById('convertTo_display').classList.remove('text-too-small');
    }else if(document.getElementById('convertTo_display').textContent.length > 11){
      document.getElementById('convertTo_display').classList.remove('text-big');
      document.getElementById('convertTo_display').classList.remove('text-medium');
      document.getElementById('convertTo_display').classList.remove('text-small');
      document.getElementById('convertTo_display').classList.add('text-too-small');
    }
  }


  //Get values of the api
  getValues(){
    this.exchangeValueService.getExchangeValue().subscribe( (value: ExchangeValue[]) => {

      //Set dollar blue
      this.blueBuy = parseInt(value[1].casa.compra);
      this.blueSell = parseInt(value[1].casa.venta);

      //Set Dollar Oficial
      this.oficialBuy = parseInt(value[0].casa.compra);
      this.oficialSell = parseInt(value[0].casa.venta);
      //Add 30% of "PAIS" Tax (Alberto chupala viejo puto) Viva la libertad
      this.oficialSell = this.oficialSell + ( (this.oficialSell / 100) * 65);


    });
  }

  async showModal() {
   const modal = await this.modalController.create({
     component: HouseModalPage,
     cssClass: 'my-custom-class'
   });
   return await modal.present();
 }

}
