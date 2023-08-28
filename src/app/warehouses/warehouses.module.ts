import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseService } from './warehouse.service';
import { WarehouseRoutingModule } from './warehouse-routing.module';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    WarehouseComponent,
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
    WarehouseRoutingModule
  ],

  providers: [WarehouseService],
  exports: [WarehouseComponent, WarehouseListComponent, NewWarehouseComponent, WarehouseEditComponent]
})
export class WarehousesModule { }
