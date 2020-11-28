import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseModalPageRoutingModule } from './house-modal-routing.module';

import { HouseModalPage } from './house-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseModalPageRoutingModule
  ],
  declarations: [HouseModalPage]
})
export class HouseModalPageModule {}
