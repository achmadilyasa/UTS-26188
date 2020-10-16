import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'tambah-item',
    loadChildren: () => import('./tambah-item/tambah-item.module').then( m => m.TambahItemPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./edit-item/edit-item.module').then( m => m.EditItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
