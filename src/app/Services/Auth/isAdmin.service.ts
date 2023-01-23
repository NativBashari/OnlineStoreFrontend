import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class IsAdminService{
    constructor(){
        this.setAdmin();
    }
     admin: boolean = false;

    setAdmin(){
        let role = localStorage.getItem("Role");
        role == "Admin" ? this.admin =  true : this.admin = false;
    }

    isAdmin () : boolean{
        return this.admin!;
    }
}