import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Acte } from '../clases/acte';
import { Group } from '../clases/group';


@Component({
  selector: 'app-acte',
  templateUrl: './acte.component.html',
  styleUrls: ['./acte.component.css']
})
export class ActeComponent implements OnInit {

  id: number;
  hora_inici: Date;
  hora_fi: Date;
  group: Group;
  actes;
  acte: Acte;
  now = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const g1 = new Group('BTS', 10);
    const a1 = new Acte(1, this.now, this.now, g1);
    console.log(this.actes = [a1]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
          if(params['id']!=null){
               this.acte = this.actes[params['id']];
          }
    });
  }

}
