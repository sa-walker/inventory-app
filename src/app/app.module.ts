import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';

import { ENVIRONMENT_INITIALIZER, importProvidersFrom, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { WarehousesModule } from './warehouses/warehouses.module';
import { InventoryModule } from './inventory/inventory.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    ItemsModule,
    WarehousesModule,
    InventoryModule,
  ],
  providers : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
