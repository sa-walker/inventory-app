import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';



@NgModule({
  declarations: [
    WarehouseComponent,
    NewWarehouseComponent,
    WarehouseEditComponent,
    WarehouseListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WarehousesModule { }
