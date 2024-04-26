import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {
  cart: IProduct[] = [];

  apiUrl = 'https://localhost:7224';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.apiUrl}/Product/ProductsGetAll`);
  }



  add(prod: IProduct) {
    this.cart.push(prod);
    console.log(`product ${prod.name} added to cart`)
  }

}
