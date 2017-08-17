import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Authentification } from '../../services/authentification/authentification.service';

import { Series } from '../../models/series';

@Injectable()
export class FirebaseService {

	constructor(private db: AngularFireDatabase, private auth: Authentification) {
	}

	/**
	 * Adds a Series to the Database.
	 *
	 * @param {Series} series Series Object
	 * @memberof FirebaseService
	 */
	addSeries(series: Series) {
		console.log('not implemented yet');
	}

	addSeriesToUser(series: Series) {
		console.log('not implemented yet');
	}

	checkEpisodeOfSeries(seriesid: number, season: number, episode: number) {
		console.log('not implemented yet');
	}

	hasUserDb(): boolean {
		const uid: string = this.auth.getUser().uid;
		console.log(`uid: ${uid}`);
		if (uid) {
			const db = this.db.list('/' + uid);
			console.log(`uid: ${db}`);
			if (db) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
}
