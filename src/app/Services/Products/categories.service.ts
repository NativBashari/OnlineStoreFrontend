import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/app/Models/ProductsManagement/Category.model";
import { environment } from "src/environments/environment";

@Injectable()
export class CategoriesService{
    constructor(private httpClient: HttpClient){

    }

    get(): Observable<Category[]>{
        return this.httpClient.get(`${environment.ApiBaseUrl}/Categories`) as Observable<Category[]>;
    }
}