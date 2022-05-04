import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddeditSeriesRoutingModule } from './addedit-series-routing.module';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS,  RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { AddeditSeriesComponent } from './addedit-series.component';


@NgModule({
  declarations: [ AddeditSeriesComponent],
  imports: [
    CommonModule,
    AddeditSeriesRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
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
export class AddeditSeriesModule { }
