import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { IntermediaryService } from '../services/intermediary/intermediary.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, public intermediary: IntermediaryService, private router: Router) { }

  ngOnInit(): void {
    this.intermediary.nameLocal();
  }

  // Method to selected tab in nav
  moveToSelectedTab(tabName: string): void {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
    if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) 
       {
          (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
       }
     }
  }

  // Method to logout
  logout(){
    this.authService.logout()
    this.intermediary.nameLocalS = null;
    localStorage.clear();
  }

}
