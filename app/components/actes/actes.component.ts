import { Component, OnInit } from '@angular/core';
import { Acte } from '../clases/acte';
import { Group } from '../clases/group';
import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';


@Component({
  selector: 'app-actes',
  templateUrl: './actes.component.html',
  styleUrls: ['./actes.component.css'],
  providers: [DatePipe]

})
export class ActesComponent implements OnInit {

  actes: Acte[];
  acteSeleccionado: string;
  now = new Date();

  constructor(
    private router: Router
  ) {
    const g1 = new Group('BTS', 10);
    const a1 = new Acte(1, this.now, this.now, g1);
    console.log(this.actes = [a1]);
  }

  ngOnInit() {

  }

  enviarActe(acte){
    this.acteSeleccionado = acte;
  }

}
