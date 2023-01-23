import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsAdminService } from 'src/app/Services/Auth/isAdmin.service';
import { User } from '../../Models/user.model';
import { AuthService } from '../../Services/Auth/auth.Service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  errorMessage: string ="";
  constructor(private authService: AuthService, private router: Router) { }
  res: {
    token: string,
    isSuccess : boolean,
    message: string,
    isAdmin: boolean
  } = 
  {
    token: "",
    isSuccess: false,
    message: "",
    isAdmin: false
  }
  ngOnInit(): void {
  }

  login: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  loginUser(){
    if(this.login.valid){
      let username = this.login.controls['userName'].value;
      let password = this.login.controls['password'].value;
      let user: User = {
        username: username,
        password: password
      }
      this.authService.tryLogin(user).subscribe(res =>{
        this.res = res as {token: string, isSuccess: boolean, message: string, isAdmin: boolean};
        localStorage.setItem("jwt", this.res.token);
        localStorage.setItem("Role", this.res.isAdmin? "Admin" : "User");
        this.router.navigate(["products-list"]);
      },
      error => {
        this.errorMessage = error.error.message;
      }
      )
    }
  }
}
