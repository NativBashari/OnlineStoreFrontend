import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { userCart } from 'src/app/Models/userCart.model';
import { UserCartService } from 'src/app/Services/userServices/userCart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  id:number =0;
  products: Product[]| null =[];
  userCart: userCart ={
    id: 0,
    user: null,
    userId: 0,
    products:[]
  }
  constructor(private activatedRoute:ActivatedRoute, private userCartsService: UserCartService, private userCartService: UserCartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      this.id = param['id'];
      console.log(this.id);
    })
    this.userCartsService.get(this.id).subscribe(res =>{
      this.userCart = res;
      this.userCartService.getUserCartProducts(this.userCart.id).subscribe(res =>{
        this.products = res as Product[];
      })
    });  
  }

 removeFromCart(product: Product){
    this.userCartService.removeFromCart(this.userCart.id,product.id).subscribe(res =>{
      console.log(res);
    })    
  }

}
