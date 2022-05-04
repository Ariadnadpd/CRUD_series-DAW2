import { Component, OnInit } from '@angular/core';
import { IntermediaryService } from '../services/intermediary/intermediary.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public intermediary: IntermediaryService) { }

  ngOnInit(): void {
  }

}
