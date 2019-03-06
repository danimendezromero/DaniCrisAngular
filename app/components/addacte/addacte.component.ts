import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

import { Acte } from '../clases/acte';
import { Group } from '../clases/group';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addacte',
  templateUrl: './addacte.component.html',
  styleUrls: ['./addacte.component.css']
})
export class AddacteComponent implements OnInit {
  nomgrup: string;
  integrants: number;
  hora_inici: string;
  hora_fi: string;

  items : any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location

  ) {

  }

  ngOnInit() {

  }

 // submitted = false;
 onSubmit() {
   // alert(this.nomgrup);
   console.log(this.items = JSON.parse(localStorage.getItem('actes')));

  // this.submitted = true;
  // return this.nomgrup;
  //crear acto+grupo
  const gnew = new Group(this.nomgrup,this.integrants);
  const anew = new Acte(this.items[this.items.length-1].numero+1,this.hora_inici,this.hora_fi,gnew);
//meterlos en el storage (añadirlos)
  this.items.push(anew);
  localStorage.setItem('actes',JSON.stringify(this.items));
  this.router.navigate(['actes']);

  // console.log(anew);
 }

 backClicked(){
     this.location.back();
   }
}
