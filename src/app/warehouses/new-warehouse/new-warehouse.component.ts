import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { WarehouseService } from '../warehouse.service';

import { Warehouse } from '../warehouse';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.css']
})
export class NewWarehouseComponent {

  constructor(private router: Router, private fb: FormBuilder, private warehouseService: WarehouseService) { }
  warehouseForm = this.fb.group({
    id: [''],
    location: ['', Validators.required],
    itemLimit: ['', [Validators.required, Validators.max(40000)]],
  });

  submitted = false;

  handleSubmit($event: any) {
    $event.preventDefault();
    this.submitted = true;
    let warehouse: Warehouse = new Warehouse(
        this.warehouseForm.value.id as unknown as number,
        this.warehouseForm.value.location as unknown as string,
        this.warehouseForm.value.itemLimit as unknown as number);
    
    this.warehouseService.createWarehouse(warehouse).subscribe(data => {
          console.log(data.id);})
    this.router.navigate(['/warehouses']);
  }

}