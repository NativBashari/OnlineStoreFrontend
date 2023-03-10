import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { IsAdminService } from 'src/app/Services/Auth/isAdmin.service';
import { CategoriesService } from 'src/app/Services/Products/categories.service';
import { ProductsService } from 'src/app/Services/Products/products.Service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] | any =[];
  isAdmin: boolean = false;
  categoryId: number = 0;
  constructor(private productsService: ProductsService, private categoriesService: CategoriesService, private router: Router, private isAdminService: IsAdminService, private activatedRoute: ActivatedRoute) { }

 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param =>{
      this.categoryId = Number(param.get('categoryId'));
    });
    if(this.categoryId == undefined){
      this.productsService.get().subscribe(res =>{
        this.products = res; 
      })
    }
    else{
      this.categoriesService.getProductsFromCategory(this.categoryId).subscribe(res =>{
        this.products = res;
      })
    }
    this.isAdmin= this.isAdminService.isAdmin();
  }

  navToAddNew(){
    this.router.navigate(["new-product"]);
  }

}
