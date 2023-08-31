import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryByWarehouseComponent } from './inventory-by-warehouse.component';

describe('InventoryByWarehouseComponent', () => {
  let component: InventoryByWarehouseComponent;
  let fixture: ComponentFixture<InventoryByWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryByWarehouseComponent]
    });
    fixture = TestBed.createComponent(InventoryByWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
