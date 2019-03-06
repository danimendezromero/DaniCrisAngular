import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Acte } from '../clases/acte';
import { Group } from '../clases/group';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() group: Group;
  constructor(  private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

}
