import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items/items.service';
import {Item} from '../items/item.model';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  adminItem: Item[];
  constructor(
      private itemsService: ItemsService,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController,
      private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.adminItem = this.itemsService.getAllItems();
  }

  deleteItem(id: string){
    this.presentLoading().then(() => {
      this.itemsService.deleteItem(id);
      this.adminItem = this.itemsService.getAllItems();
      console.log('Delete Item');
      this.presentToast();
    });
  }

  async presentAlert(id: string){
    const alert = await this.alertCtrl
        .create({
          message: 'Apakah kamu yakin ingin menghapus item ini?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel');
              }
            },
            {
              text: 'Delete',
              handler: () => {
                this.deleteItem(id);
              }
            }
          ]
        });
    console.log('Alert');
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Item Terhapus',
      duration: 3000,
      color: 'warning'
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting Item...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
