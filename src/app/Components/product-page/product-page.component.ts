import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { ProductsService } from 'src/app/Services/Products/products.Service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  productId: number = 0;
  product: Product = {
    id: 0,
    name: '',
    description:'',
    image : '',
    price: 0,
    category: {id : 0 , name : '', description : '', image: '', products : [], createdAt : new Date(), modifiedAt : new Date()},
    inventory: {id:0 , quantity: 0, createdAt : new Date() , modifiedAt : new Date()},
    discount: {id: 0, name: '', description : '' , discountPrec:0, isActive: false, createdAt: new Date(), modifiedAt: new Date()},
    sizes: [] ,
    createdAt : new Date(),
    modifiedAt: new Date()
  };
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.productId = params['id'];
    })
    this.getData();
  }

  getData(){
    this.productsService.getById(this.productId).subscribe(res =>{
      this.product = res;
    })
  }

}
