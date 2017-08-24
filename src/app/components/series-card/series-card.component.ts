
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
	private activeSeason: number;

	constructor() {
	}

	ngOnInit() {
		this.activeSeason = this.getActiveSeason();
	}

	getImageSrc() {
		const url = this.series.$posterUrl;
		if (url.endsWith('jpg')) {
			return url;
		} else {
			return 'bright-squares.53c1ec5f96d716d4265e.png';
		}
	}

	private getActiveSeason(): number {
		let activeSeason = 1;

		console.log(this.series);
		if (this.series) {
			this.series.$seasons.some(season => {
				return season.$episodes.some(episode => {
					activeSeason = season.$seasonNumber;
					return !episode.$watched;
				});
			});
		}

		return activeSeason;
	}

	private decrementActiveSeason(): void {
		if (this.activeSeason > 1) {
			this.activeSeason--;
		}
	}

	private incrementActiveSeason(): void {
		if (this.activeSeason < (this.series.$seasons.length)) {
			this.activeSeason++;
		}
	}

	private getSeasonClass(num: number): string {
		if (num === this.activeSeason) {
			return 'active';
		} else if (num - 1 === this.activeSeason) {
			return 'preactive';
		} else if (num + 1 === this.activeSeason) {
			return 'preactive';
		} else {
			return '';
		}
	}
}
