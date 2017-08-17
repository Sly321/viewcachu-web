import { TestBed, inject } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';

import { AuthentificationMock } from '../authentification/authentification.service.mock';
import { Authentification } from '../authentification/authentification.service';

class AngularFireDatabaseModuleMock {
}

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
});
