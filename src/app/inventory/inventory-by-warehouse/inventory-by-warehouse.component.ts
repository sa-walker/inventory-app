import { Component, OnInit, Input } from '@angular/core'
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ItemService } from 'src/app/items/item.service';
import { Item } from 'src/app/items/item';
import { Warehouse } from 'src/app/warehouses/warehouse';

@Component({
  selector: 'app-inventory-by-warehouse',
  templateUrl: './inventory-by-warehouse.component.html',
  styleUrls: ['./inventory-by-warehouse.component.css'],
})
export class InventoryByWarehouseComponent implements OnInit {


  existing: InventoryItem[] = [];
  available: Item[] = [];
  @Input() currentWarehouse = 0;

  constructor(private inventoryService: InventoryService,
    private itemService: ItemService) {
      
    }


    
  ngOnInit() {
    console.log(this.currentWarehouse);
    this.inventoryService.getItemsByWarehouse(this.currentWarehouse)
      .subscribe(inventory => this.existing = inventory);
    this.itemService.getItemsNotInWarehouse(this.currentWarehouse)
      .subscribe(inventory => this.available = inventory);
  }

  drop(event: CdkDragDrop<InventoryItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      


     let invItem: InventoryItem = event.previousContainer.data[event.previousIndex]
     let item = new Item(invItem.id, invItem.itemName, invItem.itemDescription);
     let warehouse = new Warehouse(this.currentWarehouse, '', 0);
      this.inventoryService 
        .createItem(new InventoryItem(0, item, warehouse, 0))
        .subscribe(data => {console.log(data.id);});

        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );

        window.location.reload();

      }

  }

  dropItem(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let item: Item = event.previousContainer.data[event.previousIndex]

      this.inventoryService.deleteItem(item.id) 
        .subscribe(data => {console.log(data.id);});

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

        window.location.reload();

      }
}
}