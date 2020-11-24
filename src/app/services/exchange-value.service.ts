import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeValueService {

  constructor(private http: HttpClient) { }

  getExchangeValue(){
    return this.http.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  }

}
