import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { NewInventoryComponent } from './new-inventory/new-inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { InventoryService } from './inventory.service';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryByWarehouseComponent } from './inventory-by-warehouse/inventory-by-warehouse.component';
import { Warehouse } from '../warehouses/warehouse';
import { Item } from '../items/item';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    InventoryListComponent,
    NewInventoryComponent,
    EditInventoryComponent,
    InventoryItemComponent,
    InventoryByWarehouseComponent,     
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    InventoryRoutingModule,
    CdkDropListGroup, CdkDropList, NgFor, CdkDrag,
  ],
  providers: [InventoryService],
  exports: [
    InventoryItemComponent, 
    InventoryListComponent, 
    NewInventoryComponent, 
    EditInventoryComponent,
    InventoryByWarehouseComponent,
  ]
})
export class InventoryModule { 

}
