import { Component, OnInit } from '@angular/core';

import { Hero }        from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
	selector: 'tecnologia-dashboard',
	templateUrl: './tecnologia.component.html',
	styleUrls: [ './tecnologia.component.css' ]
})

export class TecnologiaDashboardComponent implements OnInit {
	heroes: Hero[] = [];
	lineOptions: Object;
	pieOptions: Object;
	barOptions: Object;
	columnOptions: Object;
	columnGroupedOptions: Object;
	simpleColumnOptions: Object;

	constructor(private heroService: HeroService) {
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
		}
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
		}
	}

	ngOnInit(): void {
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(1, 5));
	}
}
