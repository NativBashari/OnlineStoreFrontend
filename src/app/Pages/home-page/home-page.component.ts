import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/ProductsManagement/Category.model';
import { CategoriesService } from 'src/app/Services/Products/categories.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.get().subscribe(res =>{
      this.categories = res;
      console.log(this.categories);
    })
  }

}
