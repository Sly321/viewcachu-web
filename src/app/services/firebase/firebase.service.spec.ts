import { TestBed, inject } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';

import { Series } from '../../models/series';

import { AuthentificationMock } from '../authentification/authentification.service.mock';
import { Authentification } from '../authentification/authentification.service';

describe('FirebaseService', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				AngularFireModule.initializeApp(environment.firebase),
				AngularFireDatabaseModule
			],
			providers: [FirebaseService, { provide: Authentification, useClass: AuthentificationMock }]
		});
	});

	it('should be created', inject([FirebaseService], (service: FirebaseService) => {
		expect(service).toBeTruthy();
	}));

	it('should be empty', inject([FirebaseService], (service: FirebaseService) => {
		service.remove('/');
		const data = service.get('/');
		expect(data.length).toBe(0);
	}));

	it('should not be empty', inject([FirebaseService], (service: FirebaseService) => {
		service.write({ 'someKey': 'someValue' }, '/node');
		const data = service.get('/node');
		expect(data.length).toBe(1);
	}));

	it('should not have user database', inject([FirebaseService], (service: FirebaseService) => {
		const result = service.hasUserDb();
		expect(result).toBe(false);
	}));

	it('should create user database', inject([FirebaseService], (service: FirebaseService) => {
		service.createUserDb();
		const result = service.hasUserDb();
		expect(result).toBe(true);
	}));

	it('should add 2 series to user', inject([FirebaseService], (service: FirebaseService) => {
		const series = new Series();
		series.name = 'name';
		series.id = 1231235123;
		const series2 = new Series();
		series2.name = 'name';
		series2.id = 51231245123;
		service.addSeriesToUser(series);
		service.addSeriesToUser(series2);
		const result = service.getUserSeries();
		expect(result.length).toBe(2);
	}));

	it('should add series to series database', inject([FirebaseService], (service: FirebaseService) => {
		const series = new Series();
		series.name = 'name';
		series.id = 1231235123;
		service.addSeries(series);
		const result = service.getSeries();
		expect(result.length).toBe(1);
	}));

	it('should have series entry in the database after adding it', inject([FirebaseService], (service: FirebaseService) => {
		const series = new Series();
		series.name = 'name';
		series.id = 4458471;
		service.addSeries(series);
		const result = service.isSeriesInDatabase(series);
		expect(result).toBe(true);
	}));
});
