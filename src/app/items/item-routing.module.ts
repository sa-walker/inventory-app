import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemComponent } from './item/item.component';
import { EditItemComponent } from './edit-item/edit-item.component';


const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
  },
  {
    path: 'new',
    component: NewItemComponent,
  },
  {
    path: ':id',
    component: ItemComponent,
  },
  {
    path: ':id/edit',
    component: EditItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }