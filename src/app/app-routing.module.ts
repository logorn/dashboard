import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendasDashboardComponent }   from './pages/dashboard/vendas.component';
import { RHDashboardComponent }   from './pages/dashboard/rh.component';
import { TecnologiaDashboardComponent }   from './pages/dashboard/tecnologia.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/vendas', pathMatch: 'full' },
  { path: 'vendas',  component: VendasDashboardComponent },
  { path: 'rh',  component: RHDashboardComponent },
  { path: 'tecnologia',  component: TecnologiaDashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
