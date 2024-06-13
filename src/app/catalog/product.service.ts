import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart: IProduct[] = [];

  //apiUrl = 'https://localhost:7224';
  constructor(private http: HttpClient, private apiServicio: ApiService) { }

  
  apiUrl = this.apiServicio.apiUrlString;
  //Funciones http
  getAllProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.apiUrl}/Product/ProductsGetAll`);
  }

  //Funciones
  add(prod: IProduct) {
    this.cart.push(prod);
    console.log(`product ${prod.name} added to cart`)
  }

  getCart(): IProduct[]{
    return this.cart;
  }

}
