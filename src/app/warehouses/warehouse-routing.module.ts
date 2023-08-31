import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { InventoryByWarehouseComponent } from '../inventory/inventory-by-warehouse/inventory-by-warehouse.component';


const routes: Routes = [
  {
    path: '',
    component: WarehouseListComponent,
  },
  {
    path: 'new',
    component: NewWarehouseComponent,
  },
  {
    path: ':id',
    component: WarehouseComponent,
  },
  {
    path: ':id/edit',
    component: WarehouseEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }