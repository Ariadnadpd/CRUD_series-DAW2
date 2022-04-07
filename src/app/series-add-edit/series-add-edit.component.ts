import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeriesService } from '../series.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';


@Component({
  selector: 'app-series-add-edit',
  templateUrl: './series-add-edit.component.html',
  styleUrls: ['./series-add-edit.component.css'],
 
})
export class SeriesAddEditComponent implements OnInit {

  myform!: FormGroup;
  idSerie!:number;
  action: string = 'Crear';
  token: string | undefined;
  filteredCountries : Observable<string[]> | undefined;
  
  countrieslist: string[] = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda",
  "Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas",
  "Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia",
  "Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután",
  "Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano",
  "Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba",
  "Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia",
  "Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón",
  "Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu",
  "Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón",
  "Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos",
  "Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui",
  "Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia",
  "Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán",
  "Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal",
  "Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo",
  "República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino",
  "San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona",
  "Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia",
  "Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu",
  "Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"
  ];


  constructor(
    private formb: FormBuilder,
    private serieService: SeriesService,
    private snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) { 

    this.myform = formb.group ({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      releaseYear: ['', Validators.required],
      countries: ['', Validators.required],
      season: ['', Validators.required],
      episodes: ['', Validators.required],
      genres: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.idSerie = aRoute.snapshot.params['id'];
    this.token = undefined;
  }

  ngOnInit(): void {

    this.filteredCountries = this.myform.get('countries')!.valueChanges.pipe(startWith(''),
    map(value => this._filter(value)),);

    if(this.idSerie !== undefined){
      this.action = "Editar";
      this.searchSerie();
    }
   
  }


  // Method to save serie
  saveSerie(){
    const serie: Series = {
      name: this.myform.value.name,
      releaseYear: this.myform.value.releaseYear,
      season: this.myform.value.season,
      countries: this.myform.value.countries,
      episodes: this.myform.value.episodes,
      genres: this.myform.value.genres,
      description: this.myform.value.description
    };

    if (this.idSerie !== undefined) {
      this.editSerie(serie);
    } else {
      this.addSerie(serie);
    }
  }

  // Method to add serie
  addSerie(serie: Series):void{
    this.serieService.addSerie(serie);
    this.snackBar.open('La serie fue agregada con éxito', '', {
      duration: 3000
    });
    this.router.navigate(['/']);
  }

  // Method to search serie
  searchSerie(){
    const serie: Series = this.serieService.searchSerie(this.idSerie);
    
    this.myform.patchValue({
      name: serie.name,
      releaseYear: serie.releaseYear,
      countries: serie.countries,
      season: serie.season,
      episodes: serie.episodes,
      genres: serie.genres,
      description: serie.description,
    });

  }

  // Method to edit serie
  editSerie(serie: Series):void {
    this.serieService.editSerie(serie, this.idSerie);
    this.snackBar.open('La serie fue editada con éxito', '', {
      duration: 3000
    });
    this.router.navigate(['/']);
  }

  // Method to check to form and save
  send(form: FormGroup, formng: NgForm) {
    // To check the main form
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    // To check the recaptcha form
    if(formng.invalid){
      for (const control of Object.keys(formng.controls)) {
        formng.controls[control].markAsTouched();
      }
      return;
    }
    this.saveSerie();
  }

  // Private method to apply countries filter 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countrieslist.filter(country => country.toLowerCase().includes(filterValue));
  }

}

