import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Series } from '../../interface/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  constructor(private angularFirestore: AngularFirestore) { }

  getDBSeries(){
    return this.angularFirestore.collection("series").snapshotChanges();
  }

  getDBSeriesByID(id: string){
    return this.angularFirestore.collection("series").doc(id).valueChanges();
  }

  createDBSerie(serie: Series){
    return new Promise<any> ((resolve, reject) => {
      this.angularFirestore.collection("series").add(serie).then( (response) => {console.log(response)}, (error) => {reject(error)})
    });
  }

  updateDBSerie(serie: Series, id: string){
    return this.angularFirestore.collection("series").doc(id).update({
      name: serie.name,
      releaseYear: serie.releaseYear,
      countries: serie.countries,
      season: serie.season,
      episodes: serie.episodes,
      genres: serie.genres,
      description: serie.description,
    });
  }

  deleteDBSerie(serie: Series){
    return this.angularFirestore.collection("series").doc(serie.id).delete();
  }

}
