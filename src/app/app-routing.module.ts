import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesAddEditComponent } from './series-add-edit/series-add-edit.component';
import { SeriesListComponent } from './series-list/series-list.component';

const routes: Routes = [
  {path: '', component: SeriesListComponent},
  {path: 'add', component: SeriesAddEditComponent},
  {path: 'edit/:id', component: SeriesAddEditComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
