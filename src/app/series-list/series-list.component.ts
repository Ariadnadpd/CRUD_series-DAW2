import { Component, OnInit, ViewChild } from '@angular/core';
import { SeriesService } from '../series.service';
import { Series } from '../series';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  seriesList!:Array<Series>;
  dataSource = new MatTableDataSource<Series>();
  displayedColumns: string[] = ['name', 'releaseYear', 'countries', 'season', 'episodes', 'genres', 'description', 'actions'];
  clickedRows = new Set<Series>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(
    private seriesService: SeriesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadSeries();
  }

  ngAfterViewInit():void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Method to load series
  loadSeries():void {
    this.seriesList = this.seriesService.getSeries();
    this.dataSource = new MatTableDataSource<Series>(this.seriesList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Method to search series
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Method to delete series
  deleteSerie(indice:number, element: any):void {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '350px',
      data: {message: '¿Está seguro que desea eliminar la serie ' + '\'' + element + '\' ?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Aceptar') {
        this.seriesService.deleteSerie(indice);
        this.loadSeries();

        this.snackBar.open('La serie ' + element + ' fue eliminada con éxito.', '', {
          duration: 3000,
        });
      }
    })
  }

}
