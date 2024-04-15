import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { HttpProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products: any;

  constructor(private productSvc: HttpProductService){

  }
  ngOnInit(){
    this.productSvc.getAllProducts().subscribe(products => {
        this.products = products;
    });
  }
  

  getAllP(){

  }

}
