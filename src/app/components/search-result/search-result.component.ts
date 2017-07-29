import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Serie } from '../../models/serie';

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
	@Input() serie: Serie;

	constructor() {
	}

	ngOnInit() {
		console.log(this.serie.poster_path);
	}

}
