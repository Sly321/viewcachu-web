import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SeriesInfoResponseByName } from '../../models/seriesInfoResponseByName';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
	@Input() serie: SeriesInfoResponseByName;

	constructor() {
	}

	ngOnInit() {
	}

}
