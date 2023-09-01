export class Warehouse {
    id: number;
    location: string;
    itemLimit: number;
    checked?: boolean;
   
   /* address: {
      street: string,
      city: string,
      state: string
    }*/
    constructor(
        id: number = 0,
        location: string = '',
        itemLimit: number = 0,
        checked?: boolean)
     {   
        this.id = id;
        this.location = location;
        this.itemLimit = itemLimit;
        this.checked = checked;
     /* this.address = {
        street: street,
        city: city,
        state: state
      }*/
    }
  }