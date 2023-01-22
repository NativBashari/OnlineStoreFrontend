import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { ProductsService } from 'src/app/Services/Products/products.Service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] | any =[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.get().subscribe(res =>{
      this.products = res; 
      console.log(this.products);
    })
  }

}
