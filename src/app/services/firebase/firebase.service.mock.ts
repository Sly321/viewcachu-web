export class FirebaseServiceMock {
	constructor() {
	}

	getSeriesInfoById() {
	}

	findSerieByName() {
	}

	isSeriesInDatabase(id: number, callback = () => {}) {
		callback();
	}
}
