import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/ProductsManagement/Category.model';
import { Discount } from 'src/app/Models/ProductsManagement/Discount.model';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { CategoriesService } from 'src/app/Services/Products/categories.service';
import { DiscountsService } from 'src/app/Services/Products/discounts.service';
import { ProductsService } from 'src/app/Services/Products/products.Service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  categories: Category[] =[];
  discounts: Discount[] =[];
  productId: number = 0;
  isUpdate: boolean = false;
  product: Product = {
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



  constructor(private catgoriesService: CategoriesService,
    private discountsService: DiscountsService,
      private productsService: ProductsService,
      private activatedRoute: ActivatedRoute) { 
      }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      this.productId = param['id'];
      if(this.productId !== undefined ){
        this.isUpdate = true;
        this.getProduct();
      }
      console.log(this.isUpdate);
    })
   
    this.catgoriesService.get().subscribe(res =>{
      this.categories = res as Category[];
    })
    this.discountsService.get().subscribe(res => {
      this.discounts = res as Discount[];
      console.log(this.discounts);
    })
   
  }

  getProduct(){
    this.productsService.getById(this.productId).subscribe(res => {
      this.product= res as Product;
      console.log(this.product);
    })
  }
 

  addProduct(){
      if(!this.isUpdate){
        this.productsService.post(this.product).subscribe(res => {
          console.log(res);
        })
      }
      else{
        this.product.modifiedAt = new Date();
        this.productsService.update(this.product).subscribe(res => {
          console.log(res);
        })
      } 
  }


}
