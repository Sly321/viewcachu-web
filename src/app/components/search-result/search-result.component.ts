import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Series } from '../../models/series';
import { SeriesInfoResponseByName } from '../../models/seriesInfoResponseByName';

/** Services */
import { SeriesapiService } from '../../services/seriesapi/seriesapi.service';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
	@Input() serie: SeriesInfoResponseByName;
	isAdded: boolean;
	disabled: boolean;

	constructor(private fb: FirebaseService, private api: SeriesapiService) {
		this.isAdded = null;
		this.disabled = false;
	}

	ngOnInit() {
		this.fb.testIsSeriesInDatabase(this.serie.id, (result) => {
			this.isAdded = result;
		});
	}

	addSeriesToUser() {
		const self = this;
		this.disabled = true;
		this.api.getCompleteSeries(this.serie.id, (series: Series) => {
			self.fb.addSeries(series);
			self.fb.addSeriesToUser(series, () => {
				self.isAdded = true;
				self.disabled = false;
			});
		});
	}

	removeSeriesFromUser() {
		console.log('not implemented yet');
		throw new DOMException();
	}
}
