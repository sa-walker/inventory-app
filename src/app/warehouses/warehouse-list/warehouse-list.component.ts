import { Component } from '@angular/core';
import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';
import { InventoryService } from 'src/app/inventory/inventory.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent {
  newWarehouses: Warehouse[] = [];
  levels: Object[] = [];
  masterSelected:boolean = false;
  checkedList:any;

  constructor(private warehouseService: WarehouseService, private inventoryService: InventoryService) { }

  ngOnInit() {
    this.warehouseService.getWarehouses()
      .subscribe(warehouses => this.newWarehouses = warehouses);
      this.inventoryService.getInventoryLevels()
      .subscribe(levels => this.levels = levels);
  }

    // The master checkbox will check/ uncheck all items
    checkUncheckAll() {
      for (var i = 0; i < this.newWarehouses.length; i++) {
        this.newWarehouses[i].checked = this.masterSelected;
      }
    }
  

      checkAllCheckBox(ev: any) { // Angular 13
        this.newWarehouses.forEach(x => x.checked = ev.target.checked)
      }
    
      isAllCheckBoxChecked() {
        return this.newWarehouses.every(p => p.checked);
      }

      deleteWarehouses(ev: any){
        if(confirm("Are you sure you want to delete this warehouse?")){
          this.checkedList = this.newWarehouses.filter(x => x.checked);
          for(var i=0; i<this.checkedList.length; i++){
            this.warehouseService.deleteWarehouse(this.checkedList[i].id).subscribe();
          }
          window.location.reload();
        }
      }

  
}
