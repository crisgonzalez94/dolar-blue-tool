import { Component, OnInit } from '@angular/core';

//Services
import { ExchangeHousesService } from 'src/app/services/exchange-houses.service';
import { ExchangeValueService } from 'src/app/services/exchange-value.service';

//Interfaces
import { Divisa } from 'src/app/interfaces/interfaces';
import { ExchangeValue } from 'src/app/interfaces/interfaces';

import { Observable } from 'rxjs';

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

  constructor( private exchangeHousesService : ExchangeHousesService , private exchangeValueService : ExchangeValueService) { }

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

}
