import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/houses-list',
    pathMatch: 'full'
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./pages/calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'cotization',
    loadChildren: () => import('./pages/cotization/cotization.module').then( m => m.CotizationPageModule)
  },
  {
    path: 'houses-list',
    loadChildren: () => import('./pages/houses-list/houses-list.module').then( m => m.HousesListPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
