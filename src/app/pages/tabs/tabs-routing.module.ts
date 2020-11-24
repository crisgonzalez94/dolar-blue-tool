import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'houses-list',
        loadChildren: () => import( '../houses-list/houses-list.module' ).then( m => m.HousesListPageModule)
      },
      {
        path: 'cotization',
        loadChildren: () => import( '../cotization/cotization.module' ).then( m => m.CotizationPageModule)
      },
      {
        path: 'calculadora',
        loadChildren: () => import( '../calculadora/calculadora.module' ).then( m => m.CalculadoraPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
