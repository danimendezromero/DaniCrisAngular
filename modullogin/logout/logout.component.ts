import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'modullogin-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  username:string;
  pass:string;
  checkLogin:boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin = true;
  }
  ngDoCheck(){
    // si esta en el localStorage checkLogin true,
    const login = JSON.parse(localStorage.getItem('login'));
    if(!login || login.username == null){
      this.router.navigate(['/login']);
    } else {

    }
  }
  desloguearse(){
    //eliminar el storage al logout
    localStorage.removeItem('login');
  }

}
