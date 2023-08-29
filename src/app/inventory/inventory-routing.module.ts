import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { NewInventoryComponent } from './new-inventory/new-inventory.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';


const routes: Routes = [
  {
    path: '',
    component: InventoryListComponent,
  },
  {
    path: 'new',
    component: NewInventoryComponent,
  },
  {
    path: ':id',
    component: InventoryItemComponent,
  },
  {
    path: ':id/edit',
    component: EditInventoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }