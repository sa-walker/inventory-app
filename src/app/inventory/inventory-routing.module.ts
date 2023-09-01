import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryByWarehouseComponent } from './inventory-by-warehouse/inventory-by-warehouse.component';


const routes: Routes = [
  {
    path: ':id/warehouse',
    component: InventoryByWarehouseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }