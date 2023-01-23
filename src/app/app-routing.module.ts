import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CmsPageComponent } from './Pages/cms-page/cms-page.component';
import { RoleGuard } from './Guards/Role.guard';
import { NewProductComponent } from './Components/new-product/new-product.component';

const routes: Routes = [
  {path:"" , component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "products-list" ,component: ProductsListComponent},
  {path: "product-page/:id", component: ProductPageComponent},
  {path: "cms" , component: CmsPageComponent, canActivate:[RoleGuard]},
  {path: "new-product" , component: NewProductComponent, canActivate: [RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
