import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/Models/ProductsManagement/product.model";
import { userCart } from "src/app/Models/userCart.model";
import { environment } from "src/environments/environment";
@Injectable()
export class UserCartService{
     userCart: userCart | undefined;
    constructor(private httpClient: HttpClient){
    }

    get(id:number): Observable<userCart>{
        return this.httpClient.get(`${environment.ApiBaseUrl}/UserCarts/` +id) as Observable<userCart>;
    }
    async addToCart(product: Product){
      
        await this.get(Number(localStorage.getItem('id'))).subscribe(res =>{
            this.userCart = res;     
        });
        this.userCart!.products!.push(product);
        return this.httpClient.put(`${environment.ApiBaseUrl}/UserCarts`, this.userCart);
    }
    async removeFromCart(product: Product){
        await this.get(Number(localStorage.getItem('id'))).subscribe(res =>{
            this.userCart = res;
        });
        this.userCart!.products! = this.userCart!.products!.filter(p => p.id != product.id);      
        return this.httpClient.put(`${environment.ApiBaseUrl}/UserCarts`, this.userCart);
    }

}