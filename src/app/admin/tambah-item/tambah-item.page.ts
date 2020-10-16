import { Component, OnInit } from '@angular/core';
import {Item} from '../../items/item.model';
import {ItemsService} from '../../items/items.service';
import {NgForm} from '@angular/forms';
import {Cpu} from '../../items/cpu.model';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {Ram} from '../../items/ram.model';
import {Gpu} from '../../items/gpu.model';
import {Mobo} from '../../items/mobo.model';

@Component({
  selector: 'app-tambah-item',
  templateUrl: './tambah-item.page.html',
  styleUrls: ['./tambah-item.page.scss'],
})
export class TambahItemPage implements OnInit {
  item: Item;
  constructor(
      private itemsService: ItemsService,
      private navCtrl: NavController,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('Submit');
    const iImageUrl = form.value.imageUrl;
    const iType = form.value.type;
    const iBrand = form.value.brand;
    const iModel = form.value.model;
    const iPrice = form.value.price.toString();
    const iStock = form.value.stock.toString();
    if (iType === 'cpu'){
      const iId = 'c' + (this.itemsService.getItemLength(iType) + 1);
      const iBaseClock = form.value.baseClock.toString();
      const iBoostClock = form.value.boostClock.toString();
      const iCoreCount = form.value.coreCount.toString();
      const iThreadCount = form.value.threadCount.toString();
      const cpu: Cpu = {
        id: iId,
        imageUrl: iImageUrl,
        type: iType,
        brand: iBrand,
        model: iModel,
        price: iPrice,
        stock: iStock,
        baseClock: iBaseClock,
        boostClock: iBoostClock,
        coreCount: iCoreCount,
        threadCount: iThreadCount
      };
      console.log(cpu);
      this.itemsService.addItem(cpu);
      console.log(this.itemsService.getAllItems());
    }
    if (iType === 'ram'){
      const iId = 'r' + (this.itemsService.getItemLength(iType) + 1);
      const iSize = form.value.size.toString();
      const iSpeed = form.value.speed.toString();
      const iPiece = form.value.piece.toString();
      const ram: Ram = {
        id: iId,
        imageUrl: iImageUrl,
        type: iType,
        brand: iBrand,
        model: iModel,
        price: iPrice,
        stock: iStock,
        size: iSize,
        speed: iSpeed,
        piece: iPiece
      };
      console.log(ram);
      this.itemsService.addItem(ram);
      console.log(this.itemsService.getAllItems());
    }
    if (iType === 'gpu'){
      const iId = 'g' + (this.itemsService.getItemLength(iType) + 1);
      const iMemory = form.value.memory.toString();
      const iSpeed = form.value.speed.toString();
      const gpu: Gpu = {
        id: iId,
        imageUrl: iImageUrl,
        type: iType,
        brand: iBrand,
        model: iModel,
        price: iPrice,
        stock: iStock,
        memory: iMemory,
        speed: iSpeed
      };
      console.log(gpu);
      this.itemsService.addItem(gpu);
      console.log(this.itemsService.getAllItems());
    }
    if (iType === 'mobo'){
      const iId = 'm' + (this.itemsService.getItemLength(iType) + 1);
      const iChipset = form.value.chipset;
      const iSocket = form.value.socket;
      const mobo: Mobo = {
        id: iId,
        imageUrl: iImageUrl,
        type: iType,
        brand: iBrand,
        model: iModel,
        price: iPrice,
        stock: iStock,
        chipset: iChipset,
        socket: iSocket
      };
      console.log(mobo);
      this.itemsService.addItem(mobo);
      console.log(this.itemsService.getAllItems());
    }

    this.presentLoading().then(() => {
      this.navCtrl.navigateBack('/admin');
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Item Bertambah',
      duration: 3000,
      color: 'success'
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Add Item...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
