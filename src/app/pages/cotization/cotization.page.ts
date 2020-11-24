import { Component, OnInit } from '@angular/core';
//Services
import { ExchangeValueService } from 'src/app/services/exchange-value.service';
//Interfaces
import { ExchangeValue } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cotization',
  templateUrl: './cotization.page.html',
  styleUrls: ['./cotization.page.scss'],
})
export class CotizationPage implements OnInit {

  //It is for saving the current value of diferent values of dollar
  values: ExchangeValue[];
  //It is for saving the current value of diferent values of dollar
  blueBuy: number;
  blueSell: number;
  oficialBuy: number;
  oficialSell: number;

  constructor( private exchangeValueService : ExchangeValueService ) { }

  ngOnInit() {
    this.getValues();
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
      this.oficialSell = Math.trunc(this.oficialSell + ( (this.oficialSell / 100) * 65));


    });
  }


}
