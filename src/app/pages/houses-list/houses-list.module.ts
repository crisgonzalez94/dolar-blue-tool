import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HousesListPageRoutingModule } from './houses-list-routing.module';

import { HousesListPage } from './houses-list.page';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HousesListPageRoutingModule,
    PipesModule
  ],
  declarations: [HousesListPage]
})
export class HousesListPageModule {}
