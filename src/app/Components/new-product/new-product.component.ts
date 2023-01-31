import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/ProductsManagement/Category.model';
import { Discount } from 'src/app/Models/ProductsManagement/Discount.model';
import { Product } from 'src/app/Models/ProductsManagement/product.model';
import { Size } from 'src/app/Models/ProductsManagement/Size.model';
import { CategoriesService } from 'src/app/Services/Products/categories.service';
import { DiscountsService } from 'src/app/Services/Products/discounts.service';
import { ProductsService } from 'src/app/Services/Products/products.Service';
import { SizesService } from 'src/app/Services/Products/sizes.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private catgoriesService: CategoriesService, private discountsService: DiscountsService, private sizesService: SizesService, private productsService: ProductsService) { }
  categories: Category[] =[];
  discounts: Discount[] =[];
  sizes: Size[] =[];
  checkedSizes: any[] =[];

  ngOnInit(): void {
    this.catgoriesService.get().subscribe(res =>{
      this.categories = res as Category[];
    })
    this.discountsService.get().subscribe(res => {
      this.discounts = res as Discount[];
      console.log(this.discounts);
    })
    this.sizesService.get().subscribe(res =>{
      this.sizes = res as Size[];
    })
   
  }

  productForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('', Validators.required),
    category: new FormControl(''),
    price: new FormControl('', Validators.required),
    discount: new FormControl(''),
    image: new FormControl('', Validators.required),
    sizes: new FormControl(''),
    // !!! DONT FORGET : !!! 
    //createdAt
    //modifiedAt
  })

  addProduct(){
    if(this.productForm.valid){
      let category = this.productForm.controls['category'].value;
      let discount = this.productForm.controls['discount'].value;
      this.postProduct(category,discount);
    }
  }
  onChangeSizes(event: any){
    if(event.target.checked){
      this.checkedSizes.push(event.target.value);
    }
    else{
      const i = this.sizes.indexOf(event.target.value); 
      this.checkedSizes.splice(i,1);
    }
    console.log(this.checkedSizes);
}

postProduct(categoryId: number, discountId: number){
  let product: Product={
    id: 0,
    name: this.productForm.controls['name'].value,
    description : this.productForm.controls['description'].value,
    price : this.productForm.controls['price'].value,
    image : this.productForm.controls['image'].value,
    category: {id : 0 , name : '', description : '', image: '', products : [], createdAt : new Date(), modifiedAt : new Date()},
    discount: {id: 0, name: '', description : '' , discountPrec:0, isActive: false, createdAt: new Date(), modifiedAt: new Date()},
    sizes: [],
    createdAt: new Date(),
    modifiedAt: new Date()
  }
  this.catgoriesService.getById(categoryId).subscribe(res => {
    product.category = res;
  });
  this.discountsService.getById(discountId).subscribe(res => {
    product.discount = res;
  });
  this.checkedSizes.forEach(item => {
    this.sizesService.getById(item).subscribe(res => {
      product.sizes.push(res);
    })
  });
  console.log(product);
  this.productsService.post(product).subscribe(res => {
    console.log(res);
  })
  

}

}
