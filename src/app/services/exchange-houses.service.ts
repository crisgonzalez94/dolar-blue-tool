import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeHousesService {

  constructor( private http: HttpClient ) { }

  getExchangesHouses(){
    return this.http.get('/assets/data/exchangeHouses.json')
  }

}
