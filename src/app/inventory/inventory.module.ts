import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    InventoryByWarehouseComponent,
  ]
})
export class InventoryModule { 

}
