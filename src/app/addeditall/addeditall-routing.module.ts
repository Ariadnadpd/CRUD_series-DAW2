import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditallComponent } from './addeditall.component';

const routes: Routes = [{ path: '', component: AddeditallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddeditallRoutingModule { }
