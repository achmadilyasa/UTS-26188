import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Cpu} from '../../items/cpu.model';
import {Item} from '../../items/item.model';
import {ItemsService} from '../../items/items.service';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Ram} from '../../items/ram.model';
import {Gpu} from '../../items/gpu.model';
import {Mobo} from '../../items/mobo.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
  loadedItem: Item;
  loadedCpu: Cpu;
  loadedRam: Ram;
  loadedGpu: Gpu;
  loadedMobo: Mobo;
  itemId: string;
  constructor(
      private itemsService: ItemsService,
      private navCtrl: NavController,
      private activateRoute: ActivatedRoute,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) { return; }
      this.itemId = paramMap.get('id');
      this.loadedItem = this.itemsService.getItem(this.itemId);
      switch (this.loadedItem.type){
        case 'cpu':
          this.loadedCpu = this.itemsService.getCpu(this.itemId);
          break;
        case 'ram':
          this.loadedRam = this.itemsService.getRam(this.itemId);
          break;
        case 'motherboard':
          this.loadedMobo = this.itemsService.getMobo(this.itemId);
          break;
        case 'gpu':
          this.loadedGpu = this.itemsService.getGpu(this.itemId);
          break;
      }
    });
  }

  onSubmit(form: NgForm){
    console.log('Submit');
    const iImageUrl = form.value.imageUrl;
    const iType = this.loadedItem.type;
    const iBrand = form.value.brand;
    const iModel = form.value.model;
    const iPrice = form.value.price.toString();
    const iStock = form.value.stock.toString();
    if (iType === 'cpu'){
      const iBaseClock = form.value.baseClock.toString();
      const iBoostClock = form.value.boostClock.toString();
      const iCoreCount = form.value.coreCount.toString();
      const iThreadCount = form.value.threadCount.toString();
      const cpu: Cpu = {
        id: this.itemId,
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
      this.itemsService.editItem(cpu);
      console.log(this.itemsService.getAllItems());
    }
    if (iType === 'ram'){
      const iSize = form.value.size.toString();
      const iSpeed = form.value.speed.toString();
      const iPiece = form.value.piece.toString();
      const ram: Ram = {
        id: this.itemId,
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
      this.itemsService.editItem(ram);
      console.log(this.itemsService.getAllItems());
    }
    if (iType === 'gpu'){
      const iMemory = form.value.memory.toString();
      const iSpeed = form.value.speed.toString();
      const gpu: Gpu = {
        id: this.itemId,
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
      this.itemsService.editItem(gpu);
      console.log(this.itemsService.getAllItems());
    }
    if (iType === 'mobo'){
      const iChipset = form.value.chipset;
      const iSocket = form.value.socket;
      const mobo: Mobo = {
        id: this.itemId,
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
      this.itemsService.editItem(mobo);
      console.log(this.itemsService.getAllItems());
    }
    this.presentLoading().then(() => {
      this.navCtrl.navigateBack('/admin');
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Item Teredit',
      duration: 3000,
      color: 'primary'
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Edit Item...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
