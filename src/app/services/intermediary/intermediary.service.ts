import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntermediaryService {

  nameLocalS !: string | null;
  constructor() { }

  nameLocal(){
    this.nameLocalS = localStorage.getItem('name');
  }
}
