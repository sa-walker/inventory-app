export class Item {
    id: number;
    name: string;
    desc: string;
   
    constructor(
        id: number = 0,
        name: string = '',
        desc: string = '')
     {   
        this.id = id;
        this.name = name;
        this.desc = desc;
    }
  }