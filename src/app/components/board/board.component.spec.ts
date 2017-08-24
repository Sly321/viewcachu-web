import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BoardComponent } from './board.component';
import { SeriesCardComponent } from '../series-card/series-card.component';

import {FirebaseServiceMock} from '../../services/firebase/firebase.service.mock';
import {FirebaseService} from '../../services/firebase/firebase.service';

describe('BoardComponent', () => {
	let component: BoardComponent;
	let fixture: ComponentFixture<BoardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [ BoardComponent, SeriesCardComponent ]
		}).overrideComponent(BoardComponent, {
			set: {
				providers: [{ provide: FirebaseService, useClass: FirebaseServiceMock }],
			}
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BoardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
