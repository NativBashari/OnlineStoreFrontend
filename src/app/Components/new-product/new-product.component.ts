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
    this.catgoriesService.get().subscribe(res =>{
      this.categories = res as Category[];
    })
    this.discountsService.get().subscribe(res => {
      this.discounts = res as Discount[];
      console.log(this.discounts);
    })
    this.activatedRoute.params.subscribe(param =>{
      this.productId = param['id'];
      if(this.productId !== undefined ){
        this.isUpdate = true;
        this.getProduct();
      }
      console.log(this.isUpdate);
    })
   
  }

  getProduct(){
    this.productsService.getById(this.productId).subscribe(res => {
      this.product= res as Product;
    })
  }

  productForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('', Validators.required),
    category: new FormControl(''),
    price: new FormControl('', Validators.required),
    discount: new FormControl(''),
    image: new FormControl(this.product.image, Validators.required),
    sizes: new FormControl(''),
    // !!! DONT FORGET : !!! 
    //createdAt
    //modifiedAt
  })

  addProduct(){
    if(this.productForm.valid){
      let product: Product={
        id: 0,
        name: this.productForm.controls['name'].value,
        description : this.productForm.controls['description'].value,
        price : this.productForm.controls['price'].value,
        image : this.productForm.controls['image'].value,
        categoryId : this.productForm.controls['category'].value,
        discountId : this.productForm.controls['discount'].value,
        category: null,
        discount: null,
        createdAt: new Date(),
        modifiedAt: new Date()
      }
      this.productsService.post(product).subscribe(res => {
        console.log(res);
      })
    }
  }


}
