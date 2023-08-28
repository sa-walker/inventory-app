import { Component } from '@angular/core';
import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent {
  newWarehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit() {
    this.warehouseService.getWarehouses()
      .subscribe(warehouses => this.newWarehouses = warehouses);
  }
}
