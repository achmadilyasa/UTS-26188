import {Item} from './item.model';

export interface Mobo extends Item {
    socket: string;
    chipset: string;
}
