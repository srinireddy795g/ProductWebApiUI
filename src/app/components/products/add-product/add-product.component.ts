import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit { 
 
  addProductRequest: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0    
  };

      constructor(private productsservice: ProductsService, private router: Router) {}
    
    ngOnInit():void {}

    addProduct(){
      this.productsservice.postProductData(this.addProductRequest)
      .subscribe({
        next: (product) => {
          this.router.navigate(['products'])      
        },
        error: (response: any) => {
          console.log(response);
        }        
      })
    }   
     
    }
  
