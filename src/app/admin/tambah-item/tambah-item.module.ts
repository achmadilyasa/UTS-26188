import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahItemPageRoutingModule } from './tambah-item-routing.module';

import { TambahItemPage } from './tambah-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahItemPageRoutingModule
  ],
  declarations: [TambahItemPage]
})
export class TambahItemPageModule {}
