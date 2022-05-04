import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSeriesComponent } from './list-series.component';

const routes: Routes = [{ path: '', component: ListSeriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListSeriesRoutingModule { }
