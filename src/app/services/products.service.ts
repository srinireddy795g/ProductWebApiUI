import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = environment.baseApiUrl;  
  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseApiUrl + 'product')
  }

  getProductById(id: number) : Observable<Product>{
    return this.http.get<Product>(this.baseApiUrl + 'product/' + id)
  }

  postProductData(addProductRequest: Product) : Observable<Product>{
    const httpHeaders = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}
    return this.http.post<Product>(this.baseApiUrl + 'product', addProductRequest)
  }

  updateProductById(id: number, updateProdReq: Product) : Observable<Product>{
    const httpHeaders = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}
    return this.http.put<Product>(this.baseApiUrl + 'product/' + id, updateProdReq)
  }

  deleteProductById(id: number) : Observable<Product>{
    return this.http.delete<Product>(this.baseApiUrl + 'product/' + id)
  }
}
