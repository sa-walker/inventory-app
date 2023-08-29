import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  newItems: Item[] = [];

  constructor(private ItemService: ItemService) { }

  ngOnInit() {
    this.ItemService.getItems()
      .subscribe(Items => this.newItems = Items);
  }
}

