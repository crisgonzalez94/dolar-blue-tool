import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizationPage } from './cotization.page';

const routes: Routes = [
  {
    path: '',
    component: CotizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizationPageRoutingModule {}
