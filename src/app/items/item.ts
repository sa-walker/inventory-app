export class Item {
    id: number;
    itemName: string;
    itemDescription: string;
   
    constructor(
        id: number = 0,
        itemName: string = '',
        itemDescription: string = '')
     {   
        this.id = id;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
    }
  }