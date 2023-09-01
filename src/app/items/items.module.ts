import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item.service';
import { ItemRoutingModule } from './item-routing.module';
import { NewItemComponent } from './new-item/new-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemListComponent } from './item-list/item-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    NewItemComponent,
    EditItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    ItemRoutingModule
  ],

  providers: [ItemService],
  exports: [ItemListComponent, NewItemComponent, EditItemComponent]
})
export class ItemsModule { }

