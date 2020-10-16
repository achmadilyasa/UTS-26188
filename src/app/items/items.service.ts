import { Injectable } from '@angular/core';
import {Cpu} from './cpu.model';
import {Gpu} from './gpu.model';
import {Ram} from './ram.model';
import {Mobo} from './mobo.model';
import {Item} from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
    private items: Item[];
    private item: Item;
  private rams: Ram[] = [{
      id: 'r1',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/10/5/29835256/29835256_ce8f0c4c-b3c0-47c7-90c6-ff7073582087_900_900.jpg',
      type: 'ram',
      brand: 'TeamGroup',
      model: 'Team Memory Delta Tforce RGB 2x8GB PC 3000 DDR4',
      price: '1250000',
      stock: '10',
      size: '8',
      speed: '240000',
      piece: '2'
  }];

  private mobos: Mobo[] = [{
      id: 'm1',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/15/7701906/7701906_3467873c-b3ce-422b-92da-e56499262380_1024_1024',
      type: 'motherboard',
      brand: 'MSI',
      model: 'MSI B450 Tomahawk MAX AM4',
      price: '1999000',
      stock: '10',
      chipset: 'B450 chipset',
      socket: 'AM4'
  }];

  private gpus: Gpu[] = [{
      id: 'g1',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/9/863736/863736_cfa0b97c-' +
          '8a85-4faf-9acb-dfe901dd69d8_700_700.png',
      type: 'gpu',
      brand: 'GALAX',
      model: 'GALAX Geforce RTX 2060 6GB DDR6',
      price: '5250000',
      stock: '20',
      memory: '6',
      speed: '14'
  }];

  private cpus: Cpu[] = [
    {
      id: 'c1',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/30/9126088/9126088_876b9eec-05f8-41ef-85e1-86ac6081a2cc_700_700',
      type: 'cpu',
      brand: 'AMD',
      model: 'AMD Ryzen™ 5 2600',
      price: '2560000',
      stock: '10',
      baseClock: '3.4',
      boostClock: '3.9',
      coreCount: '6',
      threadCount: '12'
    }
  ];

  constructor() { }

convertToCurrency(price: string){
    const sisa    = price.length % 3;
    const rupiah  = price.substr(0, sisa);
    const ribuan  = price.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
        const separator = sisa ? '.' : '';
        return rupiah + separator + ribuan.join('.');
    }else{
        return price;
    }
}

  getAllItems(){
    return [...this.cpus, ...this.gpus, ...this.mobos, ...this.rams];
  }

  getItem(id: string){
     const type = id.substr(0, 1);
     switch (type){
         case 'c':
             return this.getCpu(id);
         case 'r':
             return this.getRam(id);
         case 'm':
             return this.getMobo(id);
         case 'g':
             return this.getGpu(id);
     }
  }
    getItemLength(type: string){
        switch (type){
            case 'cpu':
                return this.cpus.length;
            case 'ram':
                return this.rams.length;
            case 'mobo':
                return this.mobos.length;
            case 'gpu':
                return this.gpus.length;
        }
    }

  deleteItem(id: string){
      const type = id.substr(0, 1);
      switch (type){
          case 'c':
              this.cpus = this.cpus.filter(cpus => {
                  return cpus.id !== id;
              });
              break;
          case 'r':
              this.rams = this.rams.filter(rams => {
                  return rams.id !== id;
              });
              break;
          case 'm':
              this.mobos = this.mobos.filter(mobos => {
                  return mobos.id !== id;
              });
              break;
          case 'g':
              this.gpus = this.gpus.filter(gpus => {
                  return gpus.id !== id;
              });
              break;
      }
  }

  addItem(item: Item) {
      const type = item.id.substr(0, 1);
      switch (type){
          case 'c':
              // @ts-ignore
              const cpu: Cpu = item;
              this.addCpu(cpu); break;
          case 'r':
              // @ts-ignore
              const ram: Ram = item;
              this.addRam(ram); break;
          case 'm':
              // @ts-ignore
              const mobo: Mobo = item;
              this.addMobo(mobo); break;
          case 'g':
              // @ts-ignore
              const gpu: Gpu = item;
              this.addGpu(gpu); break;
      }
  }

  addCpu(cpu: Cpu){
      this.cpus.push(cpu);
  }

  addRam(ram: Ram){
      this.rams.push(ram);
  }

  addMobo(mobo: Mobo){
      this.mobos.push(mobo);
  }

  addGpu(gpu: Gpu){
      this.gpus.push(gpu);
  }

  editItem(item: Item){
      const type = item.id.substr(0, 1);
      switch (type){
          case 'c':
              // @ts-ignore
              const cpu: Cpu = item;
              this.editCpu(cpu); break;
          case 'r':
              // @ts-ignore
              const ram: Ram = item;
              this.editRam(ram); break;
          case 'm':
              // @ts-ignore
              const mobo: Mobo = item;
              this.editMobo(mobo); break;
          case 'g':
              // @ts-ignore
              const gpu: Gpu = item;
              this.editGpu(gpu); break;
      }
  }

  editCpu(cpuy: Cpu){
      const index = this.cpus.findIndex(cpu => cpu.id === cpuy.id);
      this.cpus[index] = cpuy;
  }

  editRam(ramy: Ram){
      const index = this.rams.findIndex(ram => ram.id === ramy.id);
      this.rams[index] = ramy;
  }

  editMobo(moboy: Mobo){
      const index = this.rams.findIndex(mobo => mobo.id === moboy.id);
      this.mobos[index] = moboy;
  }

  editGpu(gpuy: Gpu){
      const index = this.gpus.findIndex(gpu => gpu.id === gpuy.id);
      this.gpus[index] = gpuy;
  }

  getCpu(id: string){
    return {...this.cpus.find( cpu => {
      return cpu.id === id;
      })};
  }

  getGpu(id: string){
    return {...this.gpus.find( gpu => {
        return gpu.id === id;
      })};
  }

  getMobo(id: string){
    return {...this.mobos.find( mobo => {
        return mobo.id === id;
      })};
  }

  getRam(id: string){
    return {...this.rams.find( ram => {
        return ram.id === id;
      })};
    }

}
