import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IntermediaryService } from '../services/intermediary/intermediary.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message !: string;
  btn : string = 'Aceptar';

  constructor(
    public dialogRef: MatDialogRef<MessagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public intermediary: IntermediaryService
  ){
    this.message = data.message;
  }
 
  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}