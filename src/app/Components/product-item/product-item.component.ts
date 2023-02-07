import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { IsAdminService } from 'src/app/Services/Auth/isAdmin.service';
import { ProductsService } from 'src/app/Services/Products/products.Service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    name: '',
    description:'',
    image : '',
    price: 0,
    categoryId: 0,
    category: {id : 0 , name : '', description : '', image: '', products : [], createdAt : new Date(), modifiedAt : new Date()},
    discountId: 0,
    discount: {id: 0, name: '', description : '' , discountPrec:0, isActive: false, createdAt: new Date(), modifiedAt: new Date()},
    createdAt : new Date(),
    modifiedAt: new Date()
  }
  isAdmin: boolean = this.isAdminService.isAdmin();
  constructor(private router: Router, private isAdminService: IsAdminService, private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  navToProductPage(){
    this.router.navigate(["/product-page", this.product.id]);

  }
  onClickDeleteItem(){
    this.productsService.delete(this.product.id).subscribe(res =>{
      console.log(res);
    })
  }
  onClickUpdateItem(){
    this.router.navigate(['/update-product', this.product.id]);
  }

}
