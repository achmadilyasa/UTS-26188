import { Component, OnInit } from '@angular/core';
import {Item} from '../../items/item.model';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../../items/items.service';
import {Cpu} from '../../items/cpu.model';
import {Gpu} from '../../items/gpu.model';
import {Ram} from '../../items/ram.model';
import {Mobo} from '../../items/mobo.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedItem: Item;
  loadedCpu: Cpu;
  loadedGpu: Gpu;
  loadedRam: Ram;
  loadedMobo: Mobo;
  constructor(
      private activateRoute: ActivatedRoute,
      private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) { return; }
      const id = paramMap.get('id');
      this.loadedItem = this.itemsService.getItem(id);
      switch (this.loadedItem.type){
        case 'cpu':
          this.loadedCpu = this.itemsService.getCpu(id);
          break;
        case 'ram':
          this.loadedRam = this.itemsService.getRam(id);
          break;
        case 'motherboard':
          this.loadedMobo = this.itemsService.getMobo(id);
          break;
        case 'gpu':
          this.loadedGpu = this.itemsService.getGpu(id);
          break;
      }
    });
  }

}
