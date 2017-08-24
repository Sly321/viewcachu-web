
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

	getImageSrc() {
		const url = this.series.$posterUrl;
		if (url.endsWith('jpg')) {
			return url;
		} else {
			return 'bright-squares.53c1ec5f96d716d4265e.png';
		}
	}
}
