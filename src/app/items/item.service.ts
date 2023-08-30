import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl: string = `${environment.apiUrl}items`; 

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.itemsUrl}?id=${id}`);
  }

  getItemsNotInWarehouse(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.itemsUrl}/not-warehouse?id=${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item);
  }

  updateItem(item: Item): Observable<Item> {
    console.log(item);
    //return this.http.put<Item>(`${this.itemsUrl}', warehouse);
    return this.http.post<Item>(this.itemsUrl, item);
    
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(`${this.itemsUrl}?id=${id}`);
  }
}
