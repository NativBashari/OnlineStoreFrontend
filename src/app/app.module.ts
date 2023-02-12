import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthService } from './Services/Auth/auth.Service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ProductsListComponent } from './Components/products-list/products-list.component'
import { ProductsService } from './Services/Products/products.Service';
import { HeadersInterceptors } from './Services/HeadersInterceptors.service';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CmsPageComponent } from './Pages/cms-page/cms-page.component';
import { RoleGuard } from './Guards/Role.guard';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { CategoriesService } from './Services/Products/categories.service';
import { DiscountsService } from './Services/Products/discounts.service';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { UserAccountPageComponent } from './user-account-page/user-account-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
import { UserCartService } from './Services/userServices/userCart.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductsListComponent,
    ProductPageComponent,
    CmsPageComponent,
    NewProductComponent,
    HomePageComponent,
    UserAccountPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ProductsService,
    CategoriesService,
    DiscountsService,
   {provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptors,
    multi: true
  },
  RoleGuard,
  UserCartService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
