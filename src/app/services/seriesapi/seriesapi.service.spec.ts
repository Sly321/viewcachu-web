import { TestBed, inject } from '@angular/core/testing';

import { SeriesapiService } from './seriesapi.service';

import { environment } from '../../../environments/environment';

import { SeriesInfoResponseByName } from '../../models/seriesInfoResponseByName';

import { Http, Response, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('SeriesapiService', () => {
	let classUnderTest: SeriesapiService = null;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpModule
			],
			providers: [ SeriesapiService ]
		});
	});

	beforeEach(inject([SeriesapiService], (service: SeriesapiService) => {
		classUnderTest = service;
	}));

	it('should be created', () => {
		expect(classUnderTest).toBeTruthy();
	});

	it('should find a series by name', (done) => {
		classUnderTest.findSerieByName("The Walking Dead", (res: any) => {
			expect(res.length).toBeGreaterThan(0);
			done();
		});
	});
});
