import {Injectable} from '@angular/core';
import {LoggedService} from './logged.service';

@Injectable()
export class ProductService {

  constructor(logger: LoggedService) {
  }

  getProduct(): Product {
    return new Product(0, 'iPhone7', 5699, '最新款苹果手机');
  }


}


export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public desc: string) {

  }

}

