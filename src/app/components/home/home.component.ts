import { Component, OnInit } from '@angular/core';
import { Authentification } from '../../services/authentification/authentification.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private auth: Authentification) {
	}

	ngOnInit() {
	}

	logout() {
		this.auth.logout();
	}
}
