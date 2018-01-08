import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {AnotherProductService} from '../shared/another-product.service';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.css'],
  providers: []
})
export class ProductTwoComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    this.product = this.productService.getProduct();

  }
}
