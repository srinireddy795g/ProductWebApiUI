import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { JwtModule } from '@auth0/angular-jwt';
// import { AuthGuard } from './services/auth-user.service';
import { ToastrModule } from 'ngx-toastr';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

//function is use to get jwt token from local storage
export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [
    AppComponent,   
    ProductsListComponent,
    LoginComponent,
    HomepageComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5160"],
        disallowedRoutes: []
      }
    }),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
