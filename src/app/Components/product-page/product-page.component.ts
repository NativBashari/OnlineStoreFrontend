import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { userCart } from 'src/app/Models/userCart.model';
import { ProductsService } from 'src/app/Services/Products/products.Service';
import { UserCartService } from 'src/app/Services/userServices/userCart.service';

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
    categoryId:0,
    category: {id : 0 , name : '', description : '', image: '', products : [], createdAt : new Date(), modifiedAt : new Date()},
    discountId: 0,
    discount: {id: 0, name: '', description : '' , discountPrec:0, isActive: false, createdAt: new Date(), modifiedAt: new Date()},
    createdAt : new Date(),
    modifiedAt: new Date()
  };
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private userCartService: UserCartService) { }

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
  addToCart(){
    let userCart: userCart;
    this.userCartService.get(Number(localStorage.getItem('id'))).subscribe(res =>{
      userCart = res;
      this.userCartService.addToCart(userCart!.id ,this.product.id).subscribe(res =>{
        console.log(res);
       })
    })
  
  }

}
