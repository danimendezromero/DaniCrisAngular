import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
@Component({
  selector: 'modullogin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  pass:string;
  checkLogin:boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin = false;
  }
  ngDoCheck(){
    // si esta en el localStorage checkLogin true,
    const login = JSON.parse(localStorage.getItem('login'));
    if(!login || login.username == null){

    } else {
      this.checkLogin = true;

    }
  }
  loguearse(){
    //crear un storage al logearse
    console.log(this.username, this.pass);
    const login = {
      username: this.username,
      pass: this.pass
    };
    localStorage.setItem('login',JSON.stringify(login));
    console.log(JSON.parse(localStorage.getItem('login')));
    this.router.navigate(['/pokemons']);

  }

}
