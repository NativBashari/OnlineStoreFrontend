import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { UserCartService } from 'src/app/Services/userServices/userCart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  id:number =0;
  products: Product[] =[];
  constructor(private activatedRoute:ActivatedRoute, private userCartsService: UserCartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      this.id = param['id'];
      console.log(this.id);
    })
    this.userCartsService.get(this.id).subscribe(res =>{
      this.products = res.products;
      console.log(this.products);
    });
  }

}
