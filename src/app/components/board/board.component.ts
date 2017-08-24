import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase/firebase.service';
import { Series } from '../../models/series';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	private list: Array<Series>;
	private loading: boolean;

	constructor(private fb: FirebaseService) {
		this.loading = true;
		this.list = new Array<Series>();
		console.log('constructor');
	}

	ngOnInit() {
		this.fb.hasUserDb((hasEntry) => {
			if (!hasEntry) {
				this.fb.createUserDb();
			}
		});
		this.fb.getUserSeries((array: Array<Series>) => {
			this.list = new Array<Series>();
			this.loading = true;
			array.forEach((series: Series) => {
				this.fb.getSeries(series.$id, (seriesResult: Series) => {
					this.list.push(seriesResult);
				});
			});
			this.loading = false;
		});
	}
}
