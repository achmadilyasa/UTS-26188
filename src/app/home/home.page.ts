import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items/items.service';
import {Item} from '../items/item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  item: Item[];
  private displayMode;
  constructor(
      private itemsService: ItemsService
  ) {}

  ngOnInit() {}

  ionViewWillEnter(){
    this.item = this.itemsService.getAllItems();
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
    console.log(this.displayMode);
  }

}
