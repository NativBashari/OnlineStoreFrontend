import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../../Models/user.model";

@Injectable()
export class AuthService{

    constructor(private httpClient: HttpClient){
    }

    getToken(): string{
        return localStorage.getItem('jwt')!;
    }

    tryLogin(user: User){
       return this.httpClient.post(`${environment.ApiBaseUrl}/Auth/Login`,user);
    }

    tryRegister(user: User){
        return this.httpClient.post(`${environment.ApiBaseUrl}/Auth/Register`,user)
    }


}