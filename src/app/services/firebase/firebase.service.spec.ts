import { inject, TestBed  } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

import { Authentification } from '../authentification/authentification.service';
import { AuthentificationMock } from '../authentification/authentification.service.mock';

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
