import { Component, OnInit } from '@angular/core';
import { SeriesapiService } from '../../services/seriesapi/seriesapi.service';
import { SeriesInfoResponseByName } from '../../models/seriesInfoResponseByName';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	private searchString: string;
	private searchStringObs: Subject<string> = new Subject<string>();
	private searchResultsArray: Array<SeriesInfoResponseByName>;

	constructor(private tvapi: SeriesapiService) {
		this.searchString = '';

		const self = this;
		this.searchStringObs.debounceTime(500).subscribe(
			() => {
				if (self.searchString === '') {
					self.searchResultsArray = [];
					return;
				}
				tvapi.findSerieByName(self.searchString, (result: Array<SeriesInfoResponseByName>) => {
					const results: Array<SeriesInfoResponseByName> = result;
					console.log(result);
					self.searchResultsArray = results;
				});
			}
		);
	}

	ngOnInit() {
	}

	searchStringChanged() {
		this.searchStringObs.next(this.searchString);
	}

	clearInput() {
		this.searchString = '';
		this.searchStringObs.next(this.searchString);
	}
}
