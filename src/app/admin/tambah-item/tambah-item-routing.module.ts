import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahItemPage } from './tambah-item.page';

const routes: Routes = [
  {
    path: '',
    component: TambahItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahItemPageRoutingModule {}
