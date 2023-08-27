import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { NewItemComponent } from './new-item/new-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemListComponent } from './item-list/item-list.component';



@NgModule({
  declarations: [
    ItemComponent,
    NewItemComponent,
    EditItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }
