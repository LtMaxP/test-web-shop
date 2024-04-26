import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(prod: IProduct) {
    return '/assets/images/' + prod.imageName;
  }
  
  buyButtonClicked(product: IProduct){
    this.buy.emit();
  }
}
