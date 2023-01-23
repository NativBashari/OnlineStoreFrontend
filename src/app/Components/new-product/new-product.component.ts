import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/ProductsManagement/Category.model';
import { Discount } from 'src/app/Models/ProductsManagement/Discount.model';
import { CategoriesService } from 'src/app/Services/Products/categories.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private catgoriesService: CategoriesService) { }
  categories: Category[] =[];
  discounts: Discount[] =[];



  ngOnInit(): void {
    this.catgoriesService.get().subscribe(res =>{
      this.categories = res as Category[];
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
