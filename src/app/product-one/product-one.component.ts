import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css']
})
export class ProductOneComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    this.product = this.productService.getProduct();

  }

}
