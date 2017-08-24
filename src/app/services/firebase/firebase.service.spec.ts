import { inject, TestBed  } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

import { Series } from '../../models/series';

import { Authentification } from '../authentification/authentification.service';
import { AuthentificationMock } from '../authentification/authentification.service.mock';

describe('FirebaseService', () => {
	let classUnderTest: FirebaseService = null;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				AngularFireModule.initializeApp(environment.firebase),
				AngularFireDatabaseModule
			],
			providers: [FirebaseService, { provide: Authentification, useClass: AuthentificationMock }]
		});
	});

	beforeEach(inject([FirebaseService], (service: FirebaseService) => {
		classUnderTest = service;
	}));

	it('should be created', inject([FirebaseService], (service: FirebaseService) => {
		expect(service).toBeTruthy();
	}));

	it('should be empty', inject([FirebaseService], (service: FirebaseService) => {
		service.remove('/');
		const data = service.get('/');
		expect(data.length).toBe(0);
	}));

	it('should not be empty', inject([FirebaseService], (service: FirebaseService) => {
		service.write({ someKey: 'someValue' }, '/node');
		const data = service.get('/node');
		expect(data.length).toBe(1);
	}));

	it('should not have user database', done => {
		classUnderTest.hasUserDb((result) => {
			expect(result).toBe(false);
			done();
		});
	});

	it('should create user database', done => {
		classUnderTest.createUserDb();
		classUnderTest.hasUserDb((result) => {
			expect(result).toBe(true);
			done();
		});
	});

	it('should add 2 series to user', done => {
		const series = new Series(1231235123, 'name');
		const series2 = new Series(51231245123, 'name');
		classUnderTest.addSeriesToUser(series);
		classUnderTest.addSeriesToUser(series2);
		classUnderTest.getUserSeries(result => {
			expect(result.length).toBe(2);
			done();
		});
	});

	it('should add series to series database', inject([FirebaseService], (service: FirebaseService) => {
		const series = new Series(1231235123, 'name');
		service.addSeries(series);
		const result = service.getAllSeries();
		expect(result.length).toBe(1);
	}));

	it('should have series entry in the database after adding it', (done) => {
		const series = new Series(4458471, 'name');
		classUnderTest.addSeries(series);
		classUnderTest.isSeriesInDatabase(series.$id, (result) => {
			expect(result).toBe(true);
			done();
		});
	});
});
