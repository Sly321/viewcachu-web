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
	}

	ngOnInit() {
		this.fb.getUserSeries((array: Array<Series>) => {
			console.log(array);
			array.forEach((series: Series) => {
				console.log(series);
				this.fb.getSeries(series.$id, (seriesResult: Series) => {
					console.log(seriesResult);
					this.list.push(seriesResult);
				});
			});
			this.loading = false;
		});
	}
}
