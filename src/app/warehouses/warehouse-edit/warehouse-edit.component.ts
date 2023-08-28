import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { WarehouseService } from '../warehouse.service';
import { Warehouse } from '../warehouse';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})

export class WarehouseEditComponent implements OnInit {
  warehouse: Warehouse = new Warehouse();

  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private warehouseService: WarehouseService) { }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.warehouseService.getWarehouse(id).subscribe(warehouse => this.warehouse = warehouse);
  }
  handleSubmit($event: any) {
    $event.preventDefault();
    this.submitted = true;
    this.warehouseService.updateWarehouse(this.warehouse).subscribe(data => {
      console.log(data.id);})
    this.router.navigate(['/warehouses']);
  }
}
