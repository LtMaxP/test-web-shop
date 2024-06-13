import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { ProductService } from '../catalog/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
[x: string]: any;
  products: IProduct[] = [];
  totalP: number = 0 ;
  constructor(private productSvc: ProductService) {
    
  }
  
  ngOnInit(){
    this.products = this.productSvc.getCart();
    this.totalP = this.calculationTotalPrice();
    }
    
    calculationTotalPrice(): number{
    let totalPrice = 0;
    this.products.forEach(element => {
      totalPrice = totalPrice + (+element.price);
    });
    return totalPrice;
  }

  getImageUrl(prod: IProduct) {
    return '/assets/images/' + prod.imageName;
  }

  buyButton(){

  }
}
