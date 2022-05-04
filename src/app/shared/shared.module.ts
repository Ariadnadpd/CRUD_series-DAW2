import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddeditallComponent } from '../addeditall/addeditall.component';
import { AddeditallModule } from '../addeditall/addeditall.module';
import { ListSelectComponent } from '../list-select/list-select.component';
import { ListSeriesModule } from '../list-series/list-series.module';

import { RECAPTCHA_SETTINGS,  RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddeditallComponent,
    ListSelectComponent
  ],
  imports: [
    CommonModule,
    AddeditallModule,
    ListSeriesModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  exports: [
    AddeditallModule,
    AddeditallComponent,
    ListSeriesModule,
    ListSelectComponent
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ]
})

export class SharedModule { }
