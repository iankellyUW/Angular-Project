import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductApi='http://localhost:8282/products';
  constructor(private http: HttpClient) { }

  fetchProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.getProductApi);
  }
}
