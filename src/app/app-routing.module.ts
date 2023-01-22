import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';

const routes: Routes = [
  {path:"login" , component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "products-list" ,component: ProductsListComponent},
  {path: "product-page/:id", component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
