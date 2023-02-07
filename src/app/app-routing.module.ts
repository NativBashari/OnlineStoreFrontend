import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CmsPageComponent } from './Pages/cms-page/cms-page.component';
import { RoleGuard } from './Guards/Role.guard';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"login" , component: LoginComponent},
  {path: "products-list" ,component: ProductsListComponent},
  {path: "products-list/:categoryId" ,component: ProductsListComponent},
  {path: "product-page/:id", component: ProductPageComponent},
  {path: "cms" , component: CmsPageComponent, canActivate:[RoleGuard]},
  {path: "new-product" , component: NewProductComponent, canActivate: [RoleGuard]},
  {path: "update-product/:id" , component: NewProductComponent, canActivate: [RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
