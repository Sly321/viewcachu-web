import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Authentification } from '../../services/authentification/authentification.service';
import { AuthentificationMock } from '../../services/authentification/authentification.service.mock';
import { SeriesapiService } from '../../services/seriesapi/seriesapi.service';
import { SeriesapiServiceMock } from '../../services/seriesapi/seriesapi.service.mock';

import { UserComponent } from '../user/user.component';
import { SearchComponent } from '../search/search.component';
import { BoardComponent } from '../board/board.component';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [ HomeComponent, UserComponent, SearchComponent, BoardComponent ],
			providers: [ Authentification, SeriesapiService ]
		})
		.overrideComponent(HomeComponent, {
			set: {
				providers: [{ provide: Authentification, useClass: AuthentificationMock }]
		}
		}).overrideComponent(SearchComponent, {
			set: {
				providers: [{ provide: SeriesapiService, useClass: SeriesapiServiceMock }],
				template: '<h1>Search Component Mock</h1>',
				templateUrl: './mock.html',
			}
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
