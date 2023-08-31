import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'warehouses',
    loadChildren: () => import('./warehouses/warehouses.module').then(m => m.WarehousesModule)
  },
  { path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
