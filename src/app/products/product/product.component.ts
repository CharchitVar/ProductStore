import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ps-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductDataService) { }
  products:Observable<any>

  ngOnInit() {

    this.productService.getAllData().subscribe((data)=>{
      if(data){
        this.products=data;
        console.log(this.products)
         }
    })

  
    //console.log(this.products)
  }

}
