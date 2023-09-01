import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { InventoryModule } from '../inventory/inventory.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    NewWarehouseComponent,
    WarehouseEditComponent,
    WarehouseListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    WarehouseRoutingModule, 
    InventoryModule,
  ],

  providers: [WarehouseService],
  exports: [WarehouseListComponent, NewWarehouseComponent, WarehouseEditComponent]
})
export class WarehousesModule { }
