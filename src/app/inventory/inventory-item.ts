export class InventoryItem {
    id: number;
    itemId: number;
    warehouseId: number;
    quantity: number;
   
    constructor(
        id: number = 0,
        itemId: number = 0,
        warehouseId: number = 0,
        quantity: number = 0)
     {   
        this.id = id;
        this.itemId = itemId;
        this.warehouseId = warehouseId;
        this.quantity = quantity;
    }
  }