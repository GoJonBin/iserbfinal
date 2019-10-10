import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PabsPage } from './pabs.page';

const routes: Routes = [
  {
    path: 'pabs',
    component: PabsPage,
    children: [
      {
        path: 'pab1',
        children: [
          {
            path: '',
            loadChildren: '../pab1/pab1.module#Pab1PageModule'
          }
        ]
      },
      {
        path: 'pab2',
        children: [
          {
            path: '',
            loadChildren: '../pab2/pab2.module#Pab2PageModule'
          }
        ]
      },
      {
        path: 'pab3',
        children: [
          {
            path: '',
            loadChildren: '../pab3/pab3.module#Pab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/pabs/pab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pabs/pabs/pab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PabsPageRoutingModule {}
