import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item-edit',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})

export class EditItemComponent implements OnInit {

  @Output()
  fetchDataEventEmitter = new EventEmitter();

  item: Item = new Item();

  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService) { }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id).subscribe(item => this.item = item);
    this.fetchDataEventEmitter.emit();
  }
  handleSubmit($event: any) {
    $event.preventDefault();
    this.submitted = true;
    this.itemService.updateItem(this.item).subscribe(data => {
      console.log(data.id);})
    this.router.navigate(['/items']);
  }
}

