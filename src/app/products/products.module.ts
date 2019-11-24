import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductDataService } from './product-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FsMaterialModule } from '../material-module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FsMaterialModule
  ],
  providers:[ProductDataService]
})
export class ProductsModule { }
