import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import { SeriesInfoResponseByName } from '../../models/seriesInfoResponseByName';

import { SeriesapiService } from '../../services/seriesapi/seriesapi.service';
import { SeriesapiServiceMock } from '../../services/seriesapi/seriesapi.service.mock';

import { FirebaseService } from '../../services/firebase/firebase.service';
import { FirebaseServiceMock } from '../../services/firebase/firebase.service.mock';

describe('SearchResultComponent', () => {
	let component: SearchResultComponent;
	let fixture: ComponentFixture<SearchResultComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SearchResultComponent ]
		}).overrideComponent(SearchResultComponent, {
			set: {
				providers: [{ provide: FirebaseService, useClass: FirebaseServiceMock },
							{ provide: SeriesapiService, useClass: SeriesapiServiceMock }]
			}
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchResultComponent);
		component = fixture.componentInstance;
		component.serie = new SeriesInfoResponseByName();
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
