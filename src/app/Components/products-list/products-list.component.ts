import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { IsAdminService } from 'src/app/Services/Auth/isAdmin.service';
import { ProductsService } from 'src/app/Services/Products/products.Service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] | any =[];
  isAdmin: boolean = false;

  constructor(private productsService: ProductsService, private router: Router, private isAdminService: IsAdminService) { }

  ngOnInit(): void {
    this.productsService.get().subscribe(res =>{
      this.products = res; 
    })
    this.isAdmin= this.isAdminService.isAdmin();
  }

  navToAddNew(){
    this.router.navigate(["new-product"]);
  }

}
