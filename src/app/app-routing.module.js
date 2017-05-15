"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var vendas_component_1 = require("./pages/dashboard/vendas.component");
var rh_component_1 = require("./pages/dashboard/rh.component");
var tecnologia_component_1 = require("./pages/dashboard/tecnologia.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var routes = [
    { path: '', redirectTo: '/vendas', pathMatch: 'full' },
    { path: 'vendas', component: vendas_component_1.VendasDashboardComponent },
    { path: 'rh', component: rh_component_1.RHDashboardComponent },
    { path: 'tecnologia', component: tecnologia_component_1.TecnologiaDashboardComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map