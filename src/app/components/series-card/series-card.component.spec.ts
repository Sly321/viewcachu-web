import {Series} from '../../models/series';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SeriesCardComponent } from './series-card.component';

describe('SeriesCardComponent', () => {
	let component: SeriesCardComponent;
	let fixture: ComponentFixture<SeriesCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [ SeriesCardComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SeriesCardComponent);
		component = fixture.componentInstance;
		component.series = new Series(1);
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
