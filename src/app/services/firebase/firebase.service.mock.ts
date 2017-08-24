import { Series } from '../../models/series';

import { FirebaseServiceInterface } from './firebase.interface';
export class FirebaseServiceMock implements FirebaseServiceInterface {

	constructor() {
	}

	getSeriesInfoById() {
	}

	findSerieByName() {
	}

	createUserDb() {
	}

	isSeriesInDatabase(id: number, callback = (hasEntry: boolean) => {}) {
		callback(false);
	}

	hasUserDb(callback = (hasEntry: boolean) => {}) {
		callback(true);
	}

	getUserSeries(callback = (array: Array<Series>) => {}) {
		callback(new Array<Series>());
	}

	getSeries(id: number, callback = (series: Series) => {}) {
		callback(new Series(id));
	}

	addSeries(series: Series): void {
		throw new Error('Method not implemented.');
	}
	addSeriesToUser(series: Series, callback: () => {}): void {
		throw new Error('Method not implemented.');
	}
}
