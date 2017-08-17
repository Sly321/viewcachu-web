import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Authentification } from '../../services/authentification/authentification.service';

import { LoginComponent } from './login.component';

class AuthentificationMock {
	constructor() {
	}

	getUser() {
		return 1;
	}
}

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LoginComponent ],
			providers: [ Authentification ]
		})
		.overrideComponent(LoginComponent, {
			set: { providers: [{ provide: Authentification, useClass: AuthentificationMock }] }
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
