import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Size } from "src/app/Models/ProductsManagement/Size.model";
import { environment } from "src/environments/environment";

@Injectable()
export class SizesService{
    constructor(private httpClient: HttpClient){

    }
    get(): Observable<Size[]>{
        return this.httpClient.get(`${environment.ApiBaseUrl}/Sizes`) as Observable<Size[]>;
    }
    getById(id: number): Observable<Size>{
        return this.httpClient.get(`${environment.ApiBaseUrl}/Sizes/` + id) as Observable<Size>;
    }
}