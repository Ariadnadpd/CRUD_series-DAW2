import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  nameUser !: string;
  
  constructor(
    private auth: AngularFireAuth,  
    private router: Router
  ) {}

  // Login method  
  async login (email: string, password: string){
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("Error al intentar iniciar sesión: ", err);
      return null;
    } 
  }

  // Register method
  async register (email: string, password: string){
    try {
      return await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("Error al intentar registrarse: ", err);
      return null;
    }
  }
 
  // Method to return the name of the registered user
  getUserLogged(){
    return this.auth.authState;
  }

  // Logout method
  logout() {
    return this.auth.signOut();
  }
  
}
