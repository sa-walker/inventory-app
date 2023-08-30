import { Component } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { InventoryService } from '../inventory.service';


@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {
  newInventoryItems: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.getItems()
      .subscribe(inventory => this.newInventoryItems = inventory);
  }
}