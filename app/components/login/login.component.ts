import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  pass:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
  }

  loguearse(){
    console.log(this.username, this.pass);
    const login = {
      username: this.username,
      pass: this.pass
    };
    localStorage.setItem('login',JSON.stringify(login));
    console.log(JSON.parse(localStorage.getItem('login')));
    this.router.navigate(['/actes']);

  }


}
