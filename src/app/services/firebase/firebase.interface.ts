import {Series} from '../../models/series';

export interface FirebaseServiceInterface {
	addSeries(series: Series): void;
	addSeriesToUser(series: Series, callback: () => {}): void;
	isSeriesInDatabase(seriesId: number, callback: (val: boolean) => {}): void;

	getSeries(id: number, callback: (val: Series) => {}): void;

	getUserSeries(callback: (val: Array<Series>) => {}): void;

	hasUserDb(callback: (hasEntry: boolean) => {}): void;
	createUserDb(): void;
}
