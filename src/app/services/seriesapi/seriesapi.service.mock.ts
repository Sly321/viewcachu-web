import { SeriesapiServiceInterface } from './seriesapi.interface';
import { Series } from '../../models/series';
export class SeriesapiServiceMock implements SeriesapiServiceInterface {
	constructor() {
	}

	getSeries(id: number, callback: any): void {
		throw new Error('Method not implemented.');
	}

	getSeriesSeason(id: number, season: number, callback: any): void {
		throw new Error('Method not implemented.');
	}

	getSeriesEpisode(id: number, season: number, episode: number, callback: any): void {
		throw new Error('Method not implemented.');
	}

	getCompleteSeries(id: number, callback: (series: Series) => {}): void {
		throw new Error('Method not implemented.');
	}

	findSerieByName(name: string, callback: any): void {
		throw new Error('Method not implemented.');
	}
}
