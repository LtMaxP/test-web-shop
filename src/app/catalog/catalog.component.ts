import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { IProduct } from './product.model';
import { HttpProductService } from './product.service';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './catalog.component.css',
})

export class CatalogComponent {
  productos?: IProduct[] = [];

  constructor(private productSvc: HttpProductService){

  }

  ngOnInit(){
       this.productSvc.getAllProducts().subscribe(products => {
           this.productos = products;
       });
  }
  

  // getAllP() : Observable<IProduct[]>{
  //   return this.productSvc.getAllProducts().subscribe(products => {
  //          this.productos = products;
  //      });
  // };

}
