import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ItemService } from '../item.service';

import { Item } from '../item';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {

  constructor(private router: Router, private fb: FormBuilder, private itemService: ItemService) { }
  itemForm = this.fb.group({
    id: [''],
    itemName: ['', Validators.required],
    itemDescription: ['', Validators.required],
  });

  submitted = false;

  handleSubmit($event: any) {
    $event.preventDefault();
    this.submitted = true;
    let item: Item = new Item(
        this.itemForm.value.id as unknown as number,
        this.itemForm.value.itemName as unknown as string,
        this.itemForm.value.itemDescription as unknown as string);
    
    console.log(item);

    this.itemService.createItem(item).subscribe(data => {
          console.log(data.id);})
    this.router.navigate(['/items']);
  }

}
