import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ProductOneComponent} from './product-one/product-one.component';
import {ProductService} from './shared/product.service';
import {ProductTwoComponent} from './product-two/product-two.component';
import {LoggedService} from './shared/logged.service';
import {AnotherProductService} from './shared/another-product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductOneComponent,
    ProductTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ProductService,
      useFactory: (logger: LoggedService, isDev) => {
        if (isDev) {
          return new AnotherProductService(logger);
        } else {
          return new ProductService(logger);
        }
      },
      deps: [LoggedService, 'IS_DEV_ENV']
    },
    LoggedService,
    {
      provide: 'IS_DEV_ENV', useValue: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
