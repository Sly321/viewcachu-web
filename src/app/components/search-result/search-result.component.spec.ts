import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import { SeriesInfoResponseByName } from '../../models/seriesInfoResponseByName';

describe('SearchResultComponent', () => {
	let component: SearchResultComponent;
	let fixture: ComponentFixture<SearchResultComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SearchResultComponent ]
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
