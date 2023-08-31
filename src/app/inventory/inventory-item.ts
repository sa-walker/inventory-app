import { Warehouse } from "../warehouses/warehouse";
import { Item } from "../items/item";

export class InventoryItem {
    id: number;
    item: Item;
    warehouse: Warehouse;
    quantity: number;
    itemName: string;
    itemDescription: string;
   
    constructor(
        id: number = 0,
        item: Item = new Item(),
        warehouse: Warehouse = new Warehouse(),
        quantity: number = 0, 
        itemName: string = '',
        itemDescription: string = '')
     {   
        this.id = id;
        this.item = item;
        this.warehouse = warehouse;
        this.quantity = quantity;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
    }
  }