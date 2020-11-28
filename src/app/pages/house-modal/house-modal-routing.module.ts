import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseModalPage } from './house-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HouseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseModalPageRoutingModule {}
