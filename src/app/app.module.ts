import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AddObservationComponent } from './components/add/add.component';
import { WebService } from './services/web.service';
import { CityComponent } from './components/city.component';
import { HomeComponent } from './components/home.component';
import { ObservationComponent } from './components/observation/observation.component';
import { CityDataComponent } from './components/citydata/citydata.component';

import { ReversePipe } from './pipes/reverse.pipe';
import { MaxPipe } from './pipes/max.pipe';
import { MinPipe } from './pipes/min.pipe';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddObservationComponent,
    CityComponent,
    HomeComponent,
    ObservationComponent,
    CityDataComponent,
    ReversePipe,
    MaxPipe,
    MinPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhyAhyZWZPBCs115U05_hzvRECKEZJzs8'
    }),
    Ng4LoadingSpinnerModule.forRoot(),
  ],
  providers: [WebService, HttpModule, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
