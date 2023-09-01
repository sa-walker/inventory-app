import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NewItemComponent } from "./new-item.component";
import { ItemService } from '../item.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe("NewItemComponent", () => {
  let component: NewItemComponent;
  let fixture: ComponentFixture<NewItemComponent>;
  let myService: ItemService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: ItemService, useValue: {} }],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(ItemService);
  });

  describe('a method in the component', () => {
    it('NewItemComponent created and tested using Angular spec generator extension', () => {
      expect(component).toBeTruthy();
    });
  });
})