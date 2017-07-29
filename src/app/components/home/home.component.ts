import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Authentification } from '../../services/authentification/authentification.service';
import { TvdbapiService } from '../../services/tvdbapi/tvdbapi.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	items: FirebaseListObservable<any[]>;

	constructor(db: AngularFireDatabase, private auth: Authentification, private tvdb: TvdbapiService) {
		this.items = db.list('/items');

		tvdb.testWoW();
	}

	ngOnInit() {
	}

	logout() {
		this.auth.logout();
	}
}
