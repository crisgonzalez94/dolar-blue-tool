import { Component, OnInit } from '@angular/core';

//Services
import { ExchangeHousesService } from 'src/app/services/exchange-houses.service';
import { ExchangeValueService } from 'src/app/services/exchange-value.service';

//Interfaces
import { Divisa } from 'src/app/interfaces/interfaces';
import { ExchangeValue } from 'src/app/interfaces/interfaces';

import { Observable } from 'rxjs';

//Page of modal for show the house info
import { HouseModalPage } from '../house-modal/house-modal.page';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

//Toast para avisar de que la casa no tiene un whatsapp
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.page.html',
  styleUrls: ['./houses-list.page.scss'],
})
export class HousesListPage implements OnInit {

  //Here saving the houses exchange of the list
  houses: any[];
  //It is for saving the current value of diferent values of dollar
  blueBuy: number;
  blueSell: number;
  oficialBuy: number;
  oficialSell: number;

  search: string;
  filterHouses: any[];

  constructor( private exchangeHousesService : ExchangeHousesService ,
               private exchangeValueService : ExchangeValueService ,
               private modalController: ModalController ,
               public actionSheetController: ActionSheetController,
               public toastController: ToastController) { }

  ngOnInit() {


    this.exchangeHousesService.getExchangesHouses().subscribe( (house: any[]) => {
      this.houses = house;
    } );

    this.getValues();

  }

  getValues(){
    this.exchangeValueService.getExchangeValue().subscribe( (value: ExchangeValue[]) => {

      //Set dollar blue
      this.blueBuy = parseInt(value[1].casa.compra);
      this.blueSell = parseInt(value[1].casa.venta);

      //Set Dollar Oficial
      this.oficialBuy = parseInt(value[0].casa.compra);
      this.oficialSell = parseInt(value[0].casa.venta);

    });
  }


  //busqueda
  onSearchChange( event ){
    this.search= event.detail.value;
  }

  /*==========================================================================================*/
  //Action Sheet de la casa
  /*==========================================================================================*/
  async presentActionSheet(name , adress , city , ubication , province , phone_number , web_site , email) {
    const actionSheet = await this.actionSheetController.create({
      header: name,
      subHeader: (adress + ' - ' + province),
      mode:'ios',
      cssClass: 'my-custom-class',
      translucent: false,

      buttons: [
        {
          text: 'Llamar a ' + name,
          icon: 'call-outline',
          handler: () => {
            //Evento del Boton
            //Si tiene un numero de whatsapp redirige sino envia un toast
            if (phone_number != '') {
              window.open ('tel:' + phone_number);
            }else{
              this.presentToastCall();
            }
          }
        },
        {
          text: 'Visitar Sitio de ' + name,
          icon: 'logo-chrome',
          handler: () => {
            //Evento del Boton
            //Si tiene pagina de internet
            if (web_site != '') {
              window.open(web_site);
            }else{
              this.presentToastWeb();
            }
          }
        },
        {
          text: 'Ver en Google Maps',
          icon: 'map-outline',
          handler: () => {
            window.open (ubication)
          }
        },
        {
          text: 'Volver',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  /*==========================================================================================*/
  //Toast para avisar que no hay whatsapp o pagina web
  /*==========================================================================================*/
  async presentToastCall() {
    const toast = await this.toastController.create({
      message: 'Esta casa no tiene un numero regirstrado , si lo conoce enviar a contact@cristiangonzalez.site',
      duration: 4000
    });
    toast.present();
  }
  async presentToastWeb() {
    const toast = await this.toastController.create({
      message: 'Esta casa no tiene una pagina web registrada , si lo conoce enviar a contact@cristiangonzalez.site',
      duration: 4000
    });
    toast.present();
  }

  async showModal() {
   const modal = await this.modalController.create({
     component: HouseModalPage,
     cssClass: 'my-custom-class'
   });
   return await modal.present();
 }


}
