export class Warehouse {
    id: number;
    location: string;
    itemLimit: number;
   
   /* address: {
      street: string,
      city: string,
      state: string
    }*/
    constructor(
        id: number = 0,
        location: string = '',
        itemLimit: number = 0)
     {   
        this.id = id;
        this.location = location;
        this.itemLimit = itemLimit;
     /* this.address = {
        street: street,
        city: city,
        state: state
      }*/
    }
  }