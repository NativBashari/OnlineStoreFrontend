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
    getUserCartProducts(userCartId: number){
        return this.httpClient.get(`${environment.ApiBaseUrl}/UserCarts/Products/UserCarts/` +userCartId);
    }
    addToCart(userCartId: number, productId: number){
        return this.httpClient.get(`${environment.ApiBaseUrl}/UserCarts/AddToCart/${userCartId}/${productId}`);
    }
     removeFromCart(userCartId: number , productId: number){
        return this.httpClient.get(`${environment.ApiBaseUrl}/UserCarts/RemoveFromCart/${userCartId}/${productId}`);
    }

}