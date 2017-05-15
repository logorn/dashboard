import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { ChartModule } from 'angular2-highcharts';

import { AppComponent }         from './app.component';
import { VendasDashboardComponent }   from './pages/dashboard/vendas.component';
import { RHDashboardComponent }   from './pages/dashboard/rh.component';
import { TecnologiaDashboardComponent }   from './pages/dashboard/tecnologia.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [
    AppComponent,
    VendasDashboardComponent,
    RHDashboardComponent,
    TecnologiaDashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
