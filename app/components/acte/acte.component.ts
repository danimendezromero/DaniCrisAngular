import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Acte } from '../clases/acte';
import { Group } from '../clases/group';
import { Location } from '@angular/common';

@Component({
  selector: 'app-acte',
  templateUrl: './acte.component.html',
  styleUrls: ['./acte.component.css']
})
export class ActeComponent implements OnInit {

  numero: number;
  // hora_inici: Date;
  // hora_fi: Date;
  group: Group;
  now = new Date();
  acte: Acte;
  items : any[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.items = JSON.parse(localStorage.getItem('actes'));
    console.log(this.items);
  }


  ngOnInit() {
    //comproba login
    const login = JSON.parse(localStorage.getItem('login'));
    if(!login || login.username == null){
      this.router.navigate(['/login']);
    } else {
      // this.router.navigate(['/games']);
      this.route.params.subscribe(params => {
            if(params['id']!=null){
                 this.acte = this.items[params['id']];
            }
      });
    }
  }

  ngDoCheck(){
    // si esta en el localStorage checkLogin true,

  }

  editaracte(){
    //edicion
    this.group = new Group(this.acte.group.nom, this.acte.group.integrants)

    for(var x=0; x==this.items.length; x++){
      if(this.acte.numero== this.items[x].numero){
        this.items[x].hora_inici = this.acte.hora_inici;
        this.items[x].hora_fi = this.acte.hora_fi;
        this.items[x].group = this.group;
      }
    }
    localStorage.setItem('actes',JSON.stringify(this.items));
    console.log(this.items);
  }

  backClicked(){
    //boton para poder volver a la pestaña anterior
    this.location.back();
  }

}
