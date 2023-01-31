import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/Models/ProductsManagement/product.model";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductsService{
t: string| null = '';
constructor(private httpClient: HttpClient){
   this.t = localStorage.getItem('jwt');
   console.log(this.t);
}

get(): Observable<Product>{
    return this.httpClient.get(`${environment.ApiBaseUrl}/Products`) as Observable<Product>;
}

getById(id: number) : Observable<Product>{
    return this.httpClient.get(`${environment.ApiBaseUrl}/Products/`+ id) as Observable<Product>;  
}
post(product: Product){
    return this.httpClient.post(`${environment.ApiBaseUrl}/Products/`, product);
}
}