import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //creamos variables
  username:string;
  pass:string;
  checkLogin:boolean;
  checkRegister:boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {

  }

  ngDoCheck(){
    // comprobaciones para saber si esta el login
   const login = JSON.parse(localStorage.getItem('login'));
   if(!login){
     console.log('logeado');
   } else {
     console.log('deslogeado');


   }
   //colocar register o no
   const register = JSON.parse(localStorage.getItem('register'));
   if(!register){
     this.checkRegister=false;
   } else {
     this.checkRegister = true;


   }
  }
  //accion de logearse envias los datos al service
  async loguearse(){
   const res = await this.userService.getUser(this.username, this.pass);
   this.router.navigate(['/city']);
    // console.log(res);
    //
    // console.log(this.username, this.pass);
    // const login = {
    //   username: this.username,
    //   pass: this.pass
    // };
    // localStorage.setItem('login',JSON.stringify(login));
    // console.log(JSON.parse(localStorage.getItem('login')));




    // const url = "https://reqres.in/api/login/1";
    // let data = {email: "eve.holt@reqres.in", password: "cityslicka"}
    //   fetch(url, {
    //   method: 'POST', // or 'PUT'
    //   body: JSON.stringify(data), // data can be `string` or {object}!
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => localStorage.setItem('login',JSON.stringify(response.token)));
    //
    // console.log(JSON.parse(localStorage.getItem('login')));
  }
}
