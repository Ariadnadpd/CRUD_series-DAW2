import { Component, OnInit,  ViewChild } from '@angular/core';
import { SeriesService } from '../services/series/series.service';
import { Series } from '../interface/series';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesComponent } from '../messages/messages.component';
import { IntermediaryService } from '../services/intermediary/intermediary.service';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.css']
})
export class ListSeriesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'releaseYear', 'countries', 'season', 'episodes', 'genres', 'description', 'actions'];
  clickedRows = new Set<Series>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  serie!: Series[];
  dataSource = new MatTableDataSource();

  constructor(
    private seriesService: SeriesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    public intermediary: IntermediaryService
  ) { }

  ngOnInit(): void {
    // Load series
    this.loadSeries();
    this.seriesService.getDBSeries().subscribe( (res) => {
      this.serie = res.map( (e) => {
        this.dataSource = new MatTableDataSource(this.serie);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Series)
        }
      })
    });
  }

  ngAfterViewInit():void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Method to load series
  loadSeries():void {
    this.seriesService.getDBSeries().subscribe( (res) => {
      this.serie = res.map( (e) => {
        this.dataSource = new MatTableDataSource(this.serie);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Series)
        }
      })
    });
  }

  // Method to search series
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Method to delete series
  deleteSerie(element: Series):void {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '350px',
      data: {message: '¿Está seguro que desea eliminar la serie ' + '\'' + element.name + '\' ?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Aceptar') {
        this.seriesService.deleteDBSerie(element);
        this.loadSeries();
        this.snackBar.open('La serie ' + element.name + ' fue eliminada con éxito.', '', {
          duration: 3000,
        });
      }
    })
  }

  
}


