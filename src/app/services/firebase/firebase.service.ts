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
		if (uid) {
			const db = this.get('/' + uid);
			console.log(db);
			console.log(`db.length ${db.length}`);
			if (db[0].length !== 0) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	createUserDb(): void {
		const id = this.auth.getUser().uid;
		this.write({ id: 't' }, '/users/');
	}

	remove(nodeString: string) {
		const node = this.db.list(nodeString);
		node.remove();
	}

	get(nodeString: string): Array<any> {
		const node = this.db.list(nodeString);
		const result = [];
		node.forEach((element: Array<any>) => {
			result.push(element);
		});
		return result;
	}

	write(value: any, nodeString: string) {
		const node = this.db.list('/');
		node.update(nodeString, value);
	}
}
