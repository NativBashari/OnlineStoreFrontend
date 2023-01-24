import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/ProductsManagement/Category.model';
import { Discount } from 'src/app/Models/ProductsManagement/Discount.model';
import { Size } from 'src/app/Models/ProductsManagement/Size.model';
import { CategoriesService } from 'src/app/Services/Products/categories.service';
import { DiscountsService } from 'src/app/Services/Products/discounts.service';
import { SizesService } from 'src/app/Services/Products/sizes.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private catgoriesService: CategoriesService, private discountsService: DiscountsService, private sizesService: SizesService) { }
  categories: Category[] =[];
  discounts: Discount[] =[];
  sizes: Size[] =[];



  ngOnInit(): void {
    this.catgoriesService.get().subscribe(res =>{
      this.categories = res as Category[];
    })
    this.discountsService.get().subscribe(res => {
      this.discounts = res as Discount[];
    })
    this.sizesService.get().subscribe(res =>{
      this.sizes = res as Size[];
    })
   
  }

  productForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    inventory: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    discount: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    sizes: new FormControl(''),
    // !!! DONT FORGET : !!! 
    //createdAt
    //modifiedAt
  })

}
