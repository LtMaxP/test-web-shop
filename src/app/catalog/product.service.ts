import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {

  apiUrl = 'localhost:7224';
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get('https://localhost:7224/Product');
  }
  getAllProducts2(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://localhost:7224/Product');
  }
  getAllProducts33(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('${this.apiUrl}/ProductsGetAll');
  }
}