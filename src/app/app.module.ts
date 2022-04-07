import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesAddEditComponent } from './series-add-edit/series-add-edit.component';
import { MessagesComponent } from './messages/messages.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS,  RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './footer/footer.component' ;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeriesListComponent,
    SeriesAddEditComponent,
    MessagesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
