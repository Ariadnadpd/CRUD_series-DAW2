import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { IntermediaryService } from '../services/intermediary/intermediary.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form_login !: FormGroup;
  form_register !: FormGroup;
  loading = false;
  
  constructor(
    private fb: FormBuilder, 
    public authService: AuthService,
    public intermediary: IntermediaryService,
    private _snackBar: MatSnackBar,
    private router: Router) { 
      
    this.form_login = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
    
    this.form_register = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  parseEmail(email: string){
    var email_analizado = /^([^]+)@/.exec(email);
    var nombre = "";
     if(email_analizado !== null){
        const [,uno,,,,] = email_analizado;
        nombre = uno;
      }
    return nombre;
  }
  
  // Login method
  login(){    
    const {email, password} = this.form_login.value;
    if(this.form_login.valid){
      this.authService.login(email, password)
      .then( (exito) => { 
        if(exito != null) { 
          this.getUserLogged();
          this.successLoading(0);
        } else if(exito == null) {
          this.error(0);
        }
      });
    }
  }

  // Register method
  register(){
    const {email, password} = this.form_register.value;
    if(this.form_register.valid){
      
      this.authService.register(email, password)
      .then( (exito) => { 
        if(exito != null) { 
          this.getUserLogged();
          this.successLoading(1);
        } else if(exito == null) {
          this.error(1);
          
        }
      });
    }
  }

  // Method that displays an error message
  error(control: number){
    var text = "";
    if(control==0){
      text="Error al iniciar sesión con el email indicado";
    } else if(control==1){
      text="Error al intentar registrarse con el email indicado";
    }

    this._snackBar.open(text, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    window.location.reload();
  }

  // Method that displays an success message and redirects to main
  successLoading(control: number){
    var text = "";
    if(control==1){
      text="Se ha registrado correctamente";
    } else if(control==0) {
      text="Se ha iniciado sesión correctamente";
    }
    this._snackBar.open(text, 'Aceptar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/main']);
      this.loading = false;
    }, 2000);
  }
  // Save name user logged
  getUserLogged(){
    this.authService.getUserLogged().subscribe( (res) => {
      var name = this.parseEmail(res?.email);
      localStorage.setItem('name', name);
      this.intermediary.nameLocal();
    });
  }  
}
