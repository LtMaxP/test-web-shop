import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { ProductService } from '../catalog/product.service';
import { mercadoPagoService } from '../api/api-mercadopago.service';

declare global {
  interface Window {
    MercadoPago: any;
  }
}

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
  
  constructor(private productSvc: ProductService, private apiMercadoPago: mercadoPagoService) {
    
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
    //transformar cart para enviar a la api
    const preference = {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    };

    this.apiMercadoPago.createPayment(preference).subscribe((response: any) => {
      const mp = new window.MercadoPago('TEST-68ec9527-82f7-436d-b8bf-375bd19f1e50', {
        locale: 'es-AR'
      });

      mp.checkout({
        preference: {
          id: response.id
        },
        autoOpen: true,
      });
    });
  }
  
}
