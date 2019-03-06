import { Component, OnInit } from '@angular/core';
import { Acte } from '../clases/acte';
import { Group } from '../clases/group';
import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';


@Component({
  selector: 'app-actes',
  templateUrl: './actes.component.html',
  styleUrls: ['./actes.component.css'],

})
export class ActesComponent implements OnInit {

  acteSeleccionado: string;
  items : any = [];

  constructor(
    private router: Router
  ) {
    this.items = JSON.parse(localStorage.getItem('actes'));
    console.log(this.items);
    //crear actos en caso de que el items este vacio o no este creado
    if(!this.items || this.items == null){
      this.items=Acte.creatActes();
    } else {
      // this.router.navigate(['/games']);
    }

  }


  ngOnInit() {
    // console.log(JSON.parse(localStorage.getItem('actes')));
    // console.log(JSON.stringify(actes, ['hora_inici']));
    // console.log(this.acte = [actes]);
    // console.log(this.items[actes]);
    //comprobar login
    const login = JSON.parse(localStorage.getItem('login'));
    if(!login || login.username == null){
      this.router.navigate(['/login']);
    } else {
      // this.router.navigate(['/games']);
    }


  }

  enviarActe(acte){
    this.acteSeleccionado = acte;
  }

  btnClick = function(){
    this.router.navigateByUrl('/addacte')
  }

}
