
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import {Series} from '../../models/series';

@Component({
	selector: 'app-series-card',
	templateUrl: './series-card.component.html',
	styleUrls: ['./series-card.component.less']
})
export class SeriesCardComponent implements OnInit {
	@Input() series: Series;

	constructor() { }

	ngOnInit() {
	}

}
