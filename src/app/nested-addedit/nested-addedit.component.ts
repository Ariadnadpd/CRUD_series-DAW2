import { Component, OnInit } from '@angular/core';
import { Series } from '../interface/series';

@Component({
  selector: 'app-nested-addedit',
  templateUrl: './nested-addedit.component.html',
  styleUrls: ['./nested-addedit.component.css']
})
export class NestedAddeditComponent implements OnInit {

  nameid : any;
  constructor() { }

  ngOnInit(): void {
  }

  receiveIdSerie($event: Series) {
    this.nameid = $event;
  }

}
