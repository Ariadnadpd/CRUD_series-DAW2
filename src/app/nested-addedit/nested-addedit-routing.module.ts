import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedAddeditComponent } from './nested-addedit.component';

const routes: Routes = [{ path: '', component: NestedAddeditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedAddeditRoutingModule { }
