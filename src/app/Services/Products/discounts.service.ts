import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Discount } from "src/app/Models/ProductsManagement/Discount.model";
import { environment } from "src/environments/environment";

@Injectable()
export class DiscountsService{
    constructor(private httpClient: HttpClient){
    }

    get(): Observable<Discount[]> {
        return this.httpClient.get(`${environment.ApiBaseUrl}/Discounts`) as Observable<Discount[]>;
    }
    getById(id: number): Observable<Discount>{
        return this.httpClient.get(`${environment.ApiBaseUrl}/Discounts/`+ id) as Observable<Discount>;
    }
}