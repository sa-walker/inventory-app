import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { NewInventoryComponent } from './new-inventory/new-inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { InventoryService } from './inventory.service';
import { InventoryRoutingModule } from './inventory-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    InventoryListComponent,
    NewInventoryComponent,
    EditInventoryComponent,
    InventoryItemComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    InventoryRoutingModule
  ],
  providers: [InventoryService],
  exports: [InventoryItemComponent, InventoryListComponent, NewInventoryComponent, EditInventoryComponent]
})
export class InventoryModule { }
