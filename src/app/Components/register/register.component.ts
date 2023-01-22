import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../Models/user.model';
import { AuthService } from '../../Services/Auth/auth.Service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }
  register: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });
  
  registerUser(){
    if(this.register.valid){
      let username = this.register.controls['userName'].value;
      let password = this.register.controls['password'].value;
      let user: User = {
        username: username,
        password: password
      }
      this.authService.tryRegister(user).subscribe(res =>{
        console.log(res);
      })
  }
}
}
