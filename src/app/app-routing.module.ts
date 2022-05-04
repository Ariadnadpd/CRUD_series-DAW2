import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'list-series', loadChildren: () => import('./list-series/list-series.module').then(m => m.ListSeriesModule) },
  { path: 'addedit/add', loadChildren: () => import('./addedit-series/addedit-series.module').then(m => m.AddeditSeriesModule) },
  { path: 'addedit/:id', loadChildren: () => import('./addedit-series/addedit-series.module').then(m => m.AddeditSeriesModule) },
  { path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule) },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'nested-addedit', loadChildren: () => import('./nested-addedit/nested-addedit.module').then(m => m.NestedAddeditModule) },
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
