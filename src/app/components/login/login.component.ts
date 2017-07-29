import { Component, OnInit } from '@angular/core';
import { Authentification } from '../../services/authentification/authentification.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private auth: Authentification) {
	}

	ngOnInit() {
	}

	login() {
		this.auth.login();
	}
}
