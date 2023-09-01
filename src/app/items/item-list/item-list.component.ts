import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  newItems: Item[] = [];
  masterSelected:boolean = false;
  checkedList:any;

  constructor(private ItemService: ItemService) { }

  ngOnInit() {
    this.ItemService.getItems()
      .subscribe(items => this.newItems = items);
  }

    // The master checkbox will check/ uncheck all items
    checkUncheckAll() {
      for (var i = 0; i < this.newItems.length; i++) {
        this.newItems[i].checked = this.masterSelected;
      }
    }
  

      checkAllCheckBox(ev: any) { // Angular 13
        this.newItems.forEach(x => x.checked = ev.target.checked)
      }
    
      isAllCheckBoxChecked() {
        return this.newItems.every(p => p.checked);
      }

      deleteItems(ev: any){
        if(confirm("Are you sure you want to delete this item?")){
          this.checkedList = this.newItems.filter(x => x.checked);
          for(var i=0; i<this.checkedList.length; i++){
            this.ItemService.deleteItem(this.checkedList[i].id).subscribe();
          }
          window.location.reload();
        }
      }
}

