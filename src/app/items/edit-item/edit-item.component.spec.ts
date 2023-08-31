import { TestBed } from '@angular/core/testing';
import { ItemService } from '../item.service';
import { ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { EditItemComponent } from './edit-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditItemComponent', () => {

    let service: ItemService;
    let component: EditItemComponent;
    let mockItem: any;
    let fixture: ComponentFixture<EditItemComponent>;

    let mockItemService: jasmine.SpyObj<ItemService>;

    beforeEach(() => {
        mockItemService = jasmine.createSpyObj<ItemService>('ItemService', ['getItem']);
        TestBed.configureTestingModule({
          declarations: [ EditItemComponent ],
          imports: [RouterTestingModule, ReactiveFormsModule, FormsModule],
          providers: [{ provide: ItemService, useValue: mockItemService }],
        });
    
        fixture = TestBed.createComponent(EditItemComponent);
        component = fixture.componentInstance;
        mockItem = { id: 5, itemName: 'Fake Bird mug', itemDescription: 'mug' };
 
      });


    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should not have value in itemName after construction', () => {
        expect(component.item.itemName).toBe('');
    });

    it('should call getItem method', () => {
        // make the deleteProduct method return an observable of empty string
        mockItemService.getItem.and.returnValue(of(mockItem));
        // spy on the emission
        const emitSpy = spyOn(component.fetchDataEventEmitter, 'emit');
    
        component.ngOnInit();
    
        expect(emitSpy).toHaveBeenCalled();

      });

    it('should have populated fields after Angular calls ngOnInit', () => {
        mockItemService.getItem.and.returnValue(of(mockItem));
        component.ngOnInit();
        expect(component.item.itemName).toContain(mockItem.itemName);
    });


});








  