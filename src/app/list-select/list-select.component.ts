import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Series } from '../interface/series';
import { SeriesService } from '../services/series/series.service';

@Component({
  selector: 'app-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent implements OnInit {

  @Input() data: Series = {
    id: "",
    name: "",
    releaseYear: new Date(),
    countries: "",
    season: 0,
    episodes: 0,
    genres: "", 
    description: ""
  }

  @Output() nameIdEvent = new EventEmitter<Series>();

  seriesName : any;
  name !: string;

  serie: any;

  constructor(public seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getDBSeries().subscribe( (res) => {
      this.seriesName = res.map( (e) => {
        
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Series)
        }
      })
    });
  }


  sendIdSerie(id: Series){
    this.nameIdEvent.emit(id);
    this.receiveName(id);
  }

  receiveName(id: Series){
    this.seriesService.getDBSeriesByID(id.toString()).subscribe( (res) => {
      this.serie = res;
      this.name = this.serie.name;
    });
    
    return this.name;
  }


  
  
}
