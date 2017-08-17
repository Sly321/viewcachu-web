import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ContentComponent } from './content.component';

@Component({
	selector: 'router-outlet',
	template: '<h1>mockingjay</h1>'
})
class RouterMock { }

class MockRouter { public navigate() { } }
export const routes = [
	{ path: '', component: RouterMock },
	{ path: '**', component: RouterMock },
];

describe('ContentComponent', () => {
	let component: ContentComponent;
	let fixture: ComponentFixture<ContentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContentComponent, RouterMock ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
