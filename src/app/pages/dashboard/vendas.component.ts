import { Component, OnInit } from '@angular/core';

import { Hero }        from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
	selector: 'vendas-dashboard',
	templateUrl: './vendas.component.html',
	styleUrls: [ './vendas.component.css' ]
})

export class VendasDashboardComponent implements OnInit {
	heroes: Hero[] = [];
	lineOptions: Object;
	pieOptions: Object;
	barOptions: Object;
	columnOptions: Object;
	columnGroupedOptions: Object;
	simpleColumnOptions: Object;

	constructor(private heroService: HeroService) {
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
	    }

	    this.lineOptions = {
		    chart: {
		        type: 'spline'
		    },
		    title: {
		        text: 'Quantidade de Vendas Mensal'
		    },
		    subtitle: {
		        text: 'Vendas de seguros de casas, automóveis e celulares em 2016'
		    },
		    xAxis: {
		        type: 'datetime',
		        dateTimeLabelFormats: { // don't display the dummy year
		            month: '%e. %b',
		            year: '%b'
		        },
		        title: {
		            text: 'Date'
		        }
		    },
		    yAxis: {
		    	allowDecimals: false,
		        title: {
		            text: 'Quantidade'
		        },
		        min: 0
		    },
		    tooltip: {
		        headerFormat: '<b>{series.name}</b><br>',
		        pointFormat: '{point.x:%e. %b}: {point.y} m'
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
		}

		this.barOptions = {
		    chart: {
		        type: 'bar'
		    },
		    title: {
		        text: 'Histórico de Vendas por Região'
		    },
		    subtitle: {
		        text: 'Vendas em Regiões do Brasil'
		    },
		    xAxis: {
		        categories: ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'],
		        title: {
		            text: null
		        }
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Vendas (unidade)',
		            align: 'high'
		        },
		        labels: {
		            overflow: 'justify'
		        }
		    },
		    tooltip: {
		        valueSuffix: ' un'
		    },
		    plotOptions: {
		        bar: {
		            dataLabels: {
		                enabled: true
		            }
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'top',
		        x: -40,
		        y: 80,
		        floating: true,
		        borderWidth: 1,
		        backgroundColor: '#FFFFFF',
		        shadow: true
		    },
		    credits: {
		        enabled: false
		    },
		    series: [{
		        name: 'Ano 1990',
		        data: [107, 31, 635, 203, 2]
		    }, {
		        name: 'Ano 2000',
		        data: [133, 156, 947, 408, 6]
		    }, {
		        name: 'Year 2010',
		        data: [1052, 954, 4250, 740, 38]
		    }]
		}

		this.columnOptions = {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: 'Meta de Vendas por Corretor'
		    },
		    subtitle: {
		        text: 'Vendas de seguros de automóveis e casas no mês de maio de 2017'
		    },
		    xAxis: {
		        categories: [
		            'Dayane Calderon',
		            'Thais Fernandes',
		            'Jessica Andrade'
		        ]
		    },
		    yAxis: [{
		        min: 0,
		        title: {
		            text: 'Vendas'
		        }
		    }, {
		        title: {
		            text: 'Vendas (unidade)'
		        },
		        opposite: true
		    }],
		    legend: {
		        shadow: false
		    },
		    tooltip: {
		        shared: true
		    },
		    plotOptions: {
		        column: {
		            grouping: false,
		            shadow: false,
		            borderWidth: 0
		        }
		    },
		    series: [{
		        name: 'Meta de Seguro de Automóvel',
		        color: 'rgba(165,170,217,1)',
		        data: [150, 150, 75],
		        pointPadding: 0.3,
		        pointPlacement: -0.2
		    }, {
		        name: 'Seguro de Automóvel',
		        color: 'rgba(126,86,134,.9)',
		        data: [140, 69, 12],
		        pointPadding: 0.4,
		        pointPlacement: -0.2
		    }, {
		        name: 'Meta Seguro de Casa',
		        color: 'rgba(248,161,63,1)',
		        data: [100, 100, 50],
		        pointPadding: 0.3,
		        pointPlacement: 0.2,
		        yAxis: 1
		    }, {
		        name: 'Seguro de Casa',
		        color: 'rgba(186,60,61,.9)',
		        data: [112, 135, 83],
		        pointPadding: 0.4,
		        pointPlacement: 0.2,
		        yAxis: 1
		    }]
		}

		this.columnGroupedOptions = {
		    series: [{
		        name: 'Inspeções Solicitadas',
		        data: [9457, 8451, 12546, 13201, 12901]
		    }, {
		        name: 'Inspeções Executadas',
		        data: [9392, 8411, 10457, 10504, 11403]
		    }],
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: 'Inspeções Solicitadas x Inspeções Executadas'
		    },
		    subtitle: {
		        text: 'Histórico do ano de 2017'
		    },
		    yAxis: {
		        allowDecimals: false,
		        title: {
		            text: 'Unidades'
		        }
		    },
		    xAxis: {
		        categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
		        title: {
		            text: null
		        }
		    }
		}

		/*this.columnGroupedOptions = {

		    chart: {
		        type: 'column'
		    },

		    title: {
		        text: 'Total de Vendas Agrupado por Gênero e Faixa Etária'
		    },

		    xAxis: {
		        categories: ['Automóveis', 'Casas', 'Saúde', 'Riscos Financeiros', 'Riscos Especiais']
		    },

		    yAxis: {
		        allowDecimals: false,
		        min: 0,
		        title: {
		            text: 'Quantidade de Vendas'
		        }
		    },

		    tooltip: {
		        formatter: function () {
		            return '<b>' + this.x + '</b><br/>' +
		                this.series.name + ': ' + this.y + '<br/>' +
		                'Total: ' + this.point.stackTotal;
		        }
		    },

		    plotOptions: {
		        column: {
		            stacking: 'normal'
		        }
		    },

		    series: [{
		        name: 'Masculino Jovem',
		        data: [514, 354, 475, 775, 254],
		        stack: 'masculino'
		    }, {
		        name: 'Masculino Idoso',
		        data: [310, 454, 457, 212, 545],
		        stack: 'masculino'
		    }, {
		        name: 'Feminino Jovem',
		        data: [275, 512, 660, 207, 145],
		        stack: 'feminino'
		    }, {
		        name: 'Feminino Idoso',
		        data: [305, 457, 478, 413, 354],
		        stack: 'feminino'
		    }]
		}*/

		this.simpleColumnOptions = {
		    chart: {
		        type: 'column',
		        inverted: true
		    },
		    title: {
		        text: 'Quantidade de Impressões de Contratos por Mês'
		    },
		    xAxis: {
		        type: 'category',
		        labels: {
		            rotation: -45,
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        }
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Contratos'
		        }
		    },
		    legend: {
		        enabled: false
		    },
		    tooltip: {
		        pointFormat: 'Contratos Impressos: <b>{point.y:.1f}</b>'
		    },
		    series: [{
		        name: 'Contratos Impressos',
		        data: [
		            ['Jun', 8.1],
		            ['Jul', 8.8],
		            ['Ago', 9.7],
		            ['Set', 9.1],
		            ['Out', 9.1],
		            ['Nov', 10.5],
		            ['Dez', 10.4],
		            ['Jan', 12.0],
		            ['Fev', 9.3],
		            ['Mar', 9.3],
		            ['Abr', 9.0],
		            ['Mai', 8.9]
		        ],
		        dataLabels: {
		            enabled: true,
		            color: '#FFFFFF',
		            align: 'right',
		            format: '{point.y:.1f}', // one decimal
		            y: 10, // 10 pixels down from the top
		            style: {
		                fontSize: '13px',
		                fontFamily: 'Verdana, sans-serif'
		            }
		        }
		    }]
		}
	}

	ngOnInit(): void {
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(1, 5));
	}
}
