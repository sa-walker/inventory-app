import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Warehouse } from '../warehouse';
import { Observable, BehaviorSubject, of, shareReplay, interval, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {
  @Input() warehouse!: Warehouse;
  @Output() warehouseEvent = new EventEmitter<Warehouse>();

  subscription!: Subscription;
  numbers = interval(1000).pipe(
    switchMap(() => interval(500))
  );
  subject = new BehaviorSubject("Initial value");
  sharedObservable = of('Shared Value').pipe(shareReplay(1));

  simpleObservable = new Observable(observer => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });

  sendWarehouseEvent(warehouse: Warehouse) {
    this.warehouseEvent.emit(warehouse);
  }

  ngOnInit(): void {
    console.log('WarehouseComponent initialized');

    this.subscription = this.numbers.subscribe(data => {
      console.log(data);
    });

    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 20000);
    // this.simpleObservable.subscribe(data => {
    //   console.log(data);
    // });
    // this.subject.subscribe(data => {
    //   console.log('Observer 1:', data);
    // });

    // this.subject.next('New Value');

    // this.subject.subscribe(data => console.log('Observer 2:', data));
    // this.sharedObservable.subscribe(data => console.log('Observer 1:', data));
    // this.sharedObservable.subscribe(data => console.log('Observer 2:', data));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('warehouse changed');
    for(let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      console.log(curVal, prevVal);
    }
  }
}