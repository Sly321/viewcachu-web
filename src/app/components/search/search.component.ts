import { Component, OnInit } from '@angular/core';
import { Authentification } from '../../services/authentification/authentification.service';
import { TvdbapiService } from '../../services/tvdbapi/tvdbapi.service';

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

	constructor(private auth: Authentification, private tvapi: TvdbapiService) {
		console.log(auth.getUser());

		const self = this;
		this.searchStringObs.debounceTime(500).subscribe(
			() => {
				console.log(self.searchString);
				tvapi.findSerieByName(self.searchString, (result) => {
					console.log(result);
				});
			}
		);
	}

	ngOnInit() {
	}

	searchStringChanged() {
		this.searchStringObs.next(this.searchString);
	}

}
