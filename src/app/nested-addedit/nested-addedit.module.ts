import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedAddeditRoutingModule } from './nested-addedit-routing.module';
import { NestedAddeditComponent } from './nested-addedit.component';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NestedAddeditComponent
  ],
  imports: [
    CommonModule,
    NestedAddeditRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class NestedAddeditModule { }
