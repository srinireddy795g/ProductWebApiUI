import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productDetails: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0    
  }

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
      const id = Number(params.get('id'));      

if(id){
  this.productService.getProductById(id)
  .subscribe({
    next: (response) => {
      this.productDetails = response;
    }
  })

}

      }
    })
  }

  updateProduct() {

    this.productService.updateProductById(this.productDetails.id, this.productDetails)
    .subscribe({
      next: (product) => {
        this.router.navigate(['products'])      
      },
      error: (response: any) => {
        console.log(response);
      }        
    })
  } 
  
  deleteProduct(id:number) {
    this.productService.deleteProductById(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['products']);
      }     
    });
  }

  }

