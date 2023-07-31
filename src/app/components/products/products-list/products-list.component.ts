import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
products: Product[] = [

];
  constructor(private productsservice: ProductsService) {}

ngOnInit():void {

  this.productsservice.getAllProducts()
  .subscribe({
    next: (products) => {
      this.products = products;      
    },
    error: (response: any) => {
      console.log(response);
    }
    
  })
}
}


