import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-house-modal',
  templateUrl: './house-modal.page.html',
  styleUrls: ['./house-modal.page.scss'],
})
export class HouseModalPage implements OnInit {

  //Variablea
  name: string;
  adress: string;
  province: string
  city: string;
  phone_number: string;
  web_site: string;
  email: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
