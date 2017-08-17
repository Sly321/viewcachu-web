import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SeriesapiService } from '../../services/seriesapi/seriesapi.service';
import { SeriesapiServiceMock } from '../../services/seriesapi/seriesapi.service.mock';

import { SearchComponent } from './search.component';
import { SearchResultComponent } from '../search-result/search-result.component';

describe('SearchComponent', () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [ SearchComponent, SearchResultComponent ]
		}).overrideComponent(SearchComponent, {
			set: {
				providers: [{ provide: SeriesapiService, useClass: SeriesapiServiceMock }],
			}
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
