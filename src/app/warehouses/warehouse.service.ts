import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from './warehouse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private warehousesUrl: string = `${environment.apiUrl}warehouses`; // 'api/warehouses';

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.warehousesUrl);
  }

  getWarehouse(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${this.warehousesUrl}?id=${id}`);
  }

  createWarehouse(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(this.warehousesUrl, warehouse);
  }

  updateWarehouse(warehouse: Warehouse): Observable<Warehouse> {
    console.log(warehouse);
    //return this.http.put<Warehouse>(`${this.warehousesUrl}', warehouse);
    return this.http.post<Warehouse>(this.warehousesUrl, warehouse);
    
  }

  deleteWarehouse(id: number): Observable<Warehouse> {
    return this.http.delete<Warehouse>(`${this.warehousesUrl}?id=${id}`);
  }
}
