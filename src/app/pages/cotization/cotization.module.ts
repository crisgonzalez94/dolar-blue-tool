import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizationPageRoutingModule } from './cotization-routing.module';

import { CotizationPage } from './cotization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizationPageRoutingModule
  ],
  declarations: [CotizationPage]
})
export class CotizationPageModule {}
