import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { AddObservationComponent } from './components/add/add.component';
import { CityComponent } from './components/city.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddObservationComponent
  },
  {
    path: ':city',
    component: CityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }
}