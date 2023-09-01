import { Component, OnInit, Input } from '@angular/core'
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item';
import { Router } from '@angular/router';

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
  @Input() currentWarehouse: number = 0;  

  totalStock: number = 0;

  constructor(private inventoryService: InventoryService,
    private itemService: ItemService, private router: Router) {
      
    }


    
  ngOnInit() {
    //console.log(this.currentWarehouse);
    this.inventoryService.getItemsByWarehouse(this.currentWarehouse)
      .subscribe(inventory => this.existing = inventory);
    this.itemService.getItemsNotInWarehouse(this.currentWarehouse)
      .subscribe(inventory => this.available = inventory);
    this.updateTotalStock();
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

       if(event.container.data == null){
          event.container.data = [];
        }

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
      if(confirm("Are you sure you want to remove this item from the warehouse?")){
        let item: Item = event.previousContainer.data[event.previousIndex]

        if(event.container.data == null){
          event.container.data = [];
        }
        
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

updateTotalStock(){
  this.totalStock = 0;
  this.existing.forEach(invItem => this.totalStock += parseInt(invItem.quantity.toString()));
}

updateInventoryItem(invItem: InventoryItem) {
  this.updateTotalStock();

   if(this.totalStock > invItem.warehouse.itemLimit){
      alert("This warehouse has a capacity of " + invItem.warehouse.itemLimit + " and you are trying to add " + invItem.quantity + " " + invItem.item.itemName + "s. Please reduce the quantity.");
      invItem.quantity = 0;
      return;
   }
    else{
      console.log("Updating inventory item");
    this.inventoryService.updateItem(invItem).subscribe(data => {
      console.log(data.id);})
    }
}
}