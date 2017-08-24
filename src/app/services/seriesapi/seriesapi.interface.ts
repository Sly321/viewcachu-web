import { Series } from '../../models/series';

export interface SeriesapiServiceInterface {
	getSeries(id: number, callback: any): void;
	getSeriesSeason(id: number, season: number, callback: any): void;
	getSeriesEpisode(id: number, season: number, episode: number, callback: any): void;
	getCompleteSeries(id: number, callback: (series: Series) => {}): void;
	findSerieByName(name: string, callback: any): void;
}
