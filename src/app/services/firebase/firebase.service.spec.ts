import { TestBed, inject } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';

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
		expect(data[0].length).toBe(0);
	}));

	it('should not be empty', inject([FirebaseService], (service: FirebaseService) => {
		service.write({ 'someKey': 'someValue' }, '/node');
		const data = service.get('/node');
		expect(data.length).toBe(1);
	}));
});
