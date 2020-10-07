import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User } from './../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// admin:false
  userName: string;
  password: string;
  constructor(private router:Router) { }

  loginUser(){
  
      console.log("inside router login method")

      this.router.navigate(['/app-home'])
      console.log("inside below login method")
     // return true;

    
  }

}