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
var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        this.pieOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Quantidade de Vendas por Idade'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: '18 a 27 anos',
                            y: 56.33
                        }, {
                            name: '28 a 37 anos',
                            y: 24.03,
                            sliced: true,
                            selected: true
                        }, {
                            name: '38 a 47 anos',
                            y: 10.38
                        }, {
                            name: '48 a 57 anos',
                            y: 4.77
                        }, {
                            name: '58+ anos ',
                            y: 1.11
                        }]
                }]
        };
        this.options = {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Quantidade de Vendas Mensal'
            },
            subtitle: {
                text: 'Vendas de Seguros por Tipo'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Snow depth (m)'
                },
                min: 0
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: [{
                    name: 'Seguro de Auto',
                    // Define the data points. All series have a dummy year
                    // of 1970/71 in order to be compared on the same x axis. Note
                    // that in JavaScript, months start at 0 for January, 1 for February etc.
                    data: [
                        [Date.UTC(2017, 1, 1), 40230],
                        [Date.UTC(2017, 2, 1), 41231],
                        [Date.UTC(2017, 3, 1), 39291],
                        [Date.UTC(2017, 4, 1), 36009],
                        [Date.UTC(2017, 5, 1), 35768],
                        [Date.UTC(2017, 6, 1), 38889],
                        [Date.UTC(2017, 7, 1), 39890],
                        [Date.UTC(2017, 8, 1), 46912],
                        [Date.UTC(2017, 9, 1), 51023],
                        [Date.UTC(2017, 10, 1), 50786],
                        [Date.UTC(2017, 11, 1), 52928],
                        [Date.UTC(2017, 12, 1), 50980]
                    ]
                }, {
                    name: 'Seguro de Vida',
                    data: [
                        [Date.UTC(2017, 1, 1), 37230],
                        [Date.UTC(2017, 2, 1), 39231],
                        [Date.UTC(2017, 3, 1), 36291],
                        [Date.UTC(2017, 4, 1), 37009],
                        [Date.UTC(2017, 5, 1), 39768],
                        [Date.UTC(2017, 6, 1), 33889],
                        [Date.UTC(2017, 7, 1), 35890],
                        [Date.UTC(2017, 8, 1), 44912],
                        [Date.UTC(2017, 9, 1), 47023],
                        [Date.UTC(2017, 10, 1), 47786],
                        [Date.UTC(2017, 11, 1), 52928],
                        [Date.UTC(2017, 12, 1), 51980]
                    ]
                }, {
                    name: 'Seguro de Celular',
                    data: [
                        [Date.UTC(2017, 1, 1), 36230],
                        [Date.UTC(2017, 2, 1), 38231],
                        [Date.UTC(2017, 3, 1), 37291],
                        [Date.UTC(2017, 4, 1), 39009],
                        [Date.UTC(2017, 5, 1), 34768],
                        [Date.UTC(2017, 6, 1), 37889],
                        [Date.UTC(2017, 7, 1), 31890],
                        [Date.UTC(2017, 8, 1), 42912],
                        [Date.UTC(2017, 9, 1), 45023],
                        [Date.UTC(2017, 10, 1), 47786],
                        [Date.UTC(2017, 11, 1), 68928],
                        [Date.UTC(2017, 12, 1), 65980]
                    ]
                }]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map