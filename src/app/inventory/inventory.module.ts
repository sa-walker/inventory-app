import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { NewInventoryComponent } from './new-inventory/new-inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';



@NgModule({
  declarations: [
    InventoryListComponent,
    NewInventoryComponent,
    EditInventoryComponent,
    InventoryItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventoryModule { }
