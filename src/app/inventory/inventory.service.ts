import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItem } from './inventory-item';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private inventoryUrl: string = `${environment.apiUrl}inventory`; 

  constructor(private http: HttpClient) { }

  getItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.inventoryUrl);
  }
  getInventoryLevels(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.inventoryUrl}/levels`);
  }

  getItem(id: number): Observable<InventoryItem> {
    return this.http.get<InventoryItem>(`${this.inventoryUrl}?id=${id}`);
  }

  getItemsByWarehouse(id: number): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.inventoryUrl}/by-warehouse?id=${id}`);
  }

  getItemsByItem(id: number): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.inventoryUrl}/by-item?id=${id}`);
  }

  createItem(inventoryItem: InventoryItem): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(this.inventoryUrl, inventoryItem);
  }

  updateItem(inventoryItem: InventoryItem): Observable<InventoryItem> {
    console.log(inventoryItem);
    //return this.http.put<InventoryItem>(`${this.inventoryUrl}', warehouse);
    return this.http.post<InventoryItem>(this.inventoryUrl, inventoryItem);
    
  }

  deleteItem(id: number): Observable<InventoryItem> {
    return this.http.delete<InventoryItem>(`${this.inventoryUrl}?id=${id}`);
  }
}

