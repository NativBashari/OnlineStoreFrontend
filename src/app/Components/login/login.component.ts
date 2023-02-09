import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/Models/userRegister.model';
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
  isSignUp: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }
  res: {
    token: string,
    isSuccess : boolean,
    message: string,
    isAdmin: boolean,
    userDetails: {firstName: string, lastName: string, userId: string}
  } = 
  {
    token: "",
    isSuccess: false,
    message: "",
    isAdmin: false,
    userDetails: {firstName: "", lastName: "", userId: ""}
  }
  ngOnInit(): void {
  }

  login: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
    firstName: new FormControl('firstName', [Validators.required]),
    lastName: new FormControl('lastName', [Validators.required]),
    telephone: new FormControl('Phone number', [Validators.required])
  });

  switchToSignUp(){
    this.isSignUp = true;
  }


  loginUser(){
    if(!this.isSignUp){
      if(this.login.valid){
        let username = this.login.controls['userName'].value;
        let password = this.login.controls['password'].value;
        let user: User = {
          username: username,
          password: password
        }
        this.authService.tryLogin(user).subscribe(res =>{
          this.res = res as {token: string, isSuccess: boolean, message: string, isAdmin: boolean, userDetails: {firstName: string, lastName: string, userId: string}};
          localStorage.setItem("jwt", this.res.token);
          localStorage.setItem("Role", this.res.isAdmin? "Admin" : "User");
          localStorage.setItem("fName", this.res.userDetails.firstName),
          localStorage.setItem("lName", this.res.userDetails.lastName),
          localStorage.setItem("id" , this.res.userDetails.userId);
          this.router.navigate([""]);
        },
        error => {
          this.errorMessage = error.error.message;
        }
        )
      }
    }
    else{
      if(this.login.valid){
        let username = this.login.controls['userName'].value;
        let password = this.login.controls['password'].value;
        let firstName = this.login.controls['firstName'].value;
        let lastName = this.login.controls['lastName'].value;
        let telephone = this.login.controls['telephone'].value;
        let user: UserRegister = {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
          telephone : telephone
        }
        this.authService.tryRegister(user).subscribe(res=> {
          this.errorMessage = "You register succesfully, now you can login";
          this.isSignUp = false;
        },
        err => {
          this.errorMessage = "Username already exist."
        }
        );
        this.login.setValue({userName: '', password: '', firstName: '', lastName: '', telephone: '' })

    }
  }
  }
}
