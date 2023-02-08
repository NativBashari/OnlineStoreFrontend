import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string|null ="";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user =  localStorage.getItem("fName");
    this.user += " " + localStorage.getItem("lName");
    console.log(this.user);
  }

  navToAccount(){
    if(this.user == "null null"){
    this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/my-account/'+ localStorage.getItem("id")]);
    }
  }

  logout(){
    localStorage.clear();
    window.location.reload();
    }
}
