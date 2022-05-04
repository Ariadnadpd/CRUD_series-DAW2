import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSeriesRoutingModule } from './list-series-routing.module';
import { ListSeriesComponent } from './list-series.component';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ListSeriesComponent
  ],
  imports: [
    CommonModule,
    ListSeriesRoutingModule,
    AngularMaterialModule
  ]
})
export class ListSeriesModule { }
