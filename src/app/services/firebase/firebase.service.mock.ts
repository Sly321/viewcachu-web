export class FirebaseServiceMock {
	constructor() {
	}

	getSeriesInfoById() {
	}

	findSerieByName() {
	}

	testIsSeriesInDatabase(id: number, callback = () => {}) {
		callback();
	}
}
