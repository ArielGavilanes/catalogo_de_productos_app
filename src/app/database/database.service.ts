import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  BASE_URL: string = 'http://localhost:3000';

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + '/products');
  }

  getProductsById(id_producto: number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + '/products/' + id_producto);
  }

  deleteProduct(id_producto: number): Observable<any> {
    return this.http.delete<any>(this.BASE_URL + '/products/' + id_producto);
  }

  updateProduct(id_producto: number, product: any): Observable<any> {
    return this.http.put<any>(this.BASE_URL + '/products/' + id_producto, product);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL + '/products/', product);
  }
}
