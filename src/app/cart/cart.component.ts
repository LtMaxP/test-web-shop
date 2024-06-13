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
  products: IProduct[] = [];
  totalPrice: number = 0.0;

constructor(private productSvc: ProductService) {
   
}

  ngOnInit(){
    this.products = this.productSvc.getCart();

  }

  calculationTotalPrice(){
    this.products.forEach(element => {
      this.totalPrice = this.totalPrice + element.price;
    });
  }

  getImageUrl(prod: IProduct) {
    return '/assets/images/' + prod.imageName;
  }

  buyButton(){
    
  }
}
