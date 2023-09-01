export class Item {
    id: number;
    itemName: string;
    itemDescription: string;
    checked?: boolean;
   
    constructor(
        id: number = 0,
        itemName: string = '',
        itemDescription: string = '',
        checked?: boolean)
     {   
        this.id = id;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.checked = checked;
    }
  }