import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Models/user.model';
import { AuthService } from '../../Services/Auth/auth.Service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  res: {
    token: string
  } = {token: ""}
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
        this.res = res as {token: string};
        localStorage.setItem("jwt", this.res.token);
        this.router.navigate(["products-list"]);

      })
    }

  }
}
