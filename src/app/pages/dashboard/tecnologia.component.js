"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("../../hero.service");
var TecnologiaDashboardComponent = (function () {
    function TecnologiaDashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        this.barOptions = {
            title: {
                text: 'Distribuição de Telefones Celulares'
            },
            subtitle: {
                text: 'Distribuição para gerentes'
            },
            xAxis: {
                categories: ['iPhone 4', 'iPhone 5', 'iPhone 5s', 'iPhone 6', 'iPhone 6s', 'iPhone 7']
            },
            yAxis: [{
                    min: 0,
                    title: {
                        text: 'Quantidade'
                    }
                }],
            chart: {
                inverted: false,
                polar: false
            },
            series: [{
                    type: 'column',
                    colorByPoint: true,
                    data: [29, 71, 106, 129, 80, 10],
                    showInLegend: false
                }]
        };
        this.columnOptions = {
            title: {
                text: 'Distribuição de Sistemas Operacionais'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Windows 98', 'Windows XP', 'Windows 7', 'Windows 8', 'Windows 10', 'Linux RedHat', 'Linux Ubuntu', 'Windows Server 2000']
            },
            yAxis: [{
                    min: 0,
                    title: {
                        text: 'Quantidade'
                    }
                }],
            chart: {
                inverted: true,
                polar: false
            },
            series: [{
                    type: 'column',
                    colorByPoint: true,
                    data: [29, 71, 106, 580, 445, 10, 50, 10],
                    showInLegend: false
                }]
        };
    }
    TecnologiaDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return TecnologiaDashboardComponent;
}());
TecnologiaDashboardComponent = __decorate([
    core_1.Component({
        selector: 'tecnologia-dashboard',
        templateUrl: './tecnologia.component.html',
        styleUrls: ['./tecnologia.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], TecnologiaDashboardComponent);
exports.TecnologiaDashboardComponent = TecnologiaDashboardComponent;
//# sourceMappingURL=tecnologia.component.js.map