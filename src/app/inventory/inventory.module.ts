import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { NewInventoryComponent } from './new-inventory/new-inventory.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { InventoryService } from './inventory.service';
import { InventoryRoutingModule } from './inventory-routing.module';
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
    InventoryRoutingModule,
    CdkDropListGroup, CdkDropList, NgFor, CdkDrag
  ],
  providers: [InventoryService],
  exports: [InventoryItemComponent, InventoryListComponent, NewInventoryComponent, EditInventoryComponent]
})
export class InventoryModule { 

  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  basket = ['Oranges', 'Bananas', 'Cucumbers'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
