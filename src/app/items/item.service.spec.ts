import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { ItemService } from './item.service';
import { Item } from './item';

describe('ItemService', () => {
  let httpTestingController: HttpTestingController;
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ItemService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getItem(id) should return expected data', (done) => {
    const expectedData: Item = new Item(5, 'Fake Bird mug', 'mug');

    service.getItem(5).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8080/items?id=5');

    testRequest.flush(expectedData);
  });
});
