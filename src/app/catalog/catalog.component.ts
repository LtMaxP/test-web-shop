import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { IProduct } from './product.model';
import { HttpProductService } from './product.service';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  styleUrl: './catalog.component.css',
})

export class CatalogComponent {
  productos?: IProduct[] = [];
  filter: string = '';

  constructor(private productSvc: HttpProductService){
    
  }
  
  ngOnInit(){
    this.productSvc.getAllProducts().subscribe(products => {
      this.productos = products;
    });
  }

  AddToCart(prod: IProduct) {
    this.productSvc.add(prod);
    console.log(`product ${prod.name} added to cart`)
  }
  
  getFilteredProducts(){
    return this.filter === ''
    ? this.productos
    : this.productos?.filter(
      (producti: any) => producti.category === this.filter
    );
  }

  // getAllP() : Observable<IProduct[]>{
  //   return this.productSvc.getAllProducts().subscribe(products => {
  //          this.productos = products;
  //      });
  // };

}
