import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditSeriesComponent } from './addedit-series.component';

const routes: Routes = [{ path: '', component: AddeditSeriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddeditSeriesRoutingModule { }
