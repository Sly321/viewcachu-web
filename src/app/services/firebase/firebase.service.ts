import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Authentification } from '../../services/authentification/authentification.service';

import { Series } from '../../models/series';

@Injectable()
export class FirebaseService {

	constructor(private db: AngularFireDatabase, private auth: Authentification) {
	}

	/**
	 * Adds a series to the series database /series.
	 *
	 * @param {Series} series Series Object
	 * @memberof FirebaseService
	 */
	addSeries(series: Series): void {
		this.write(series, `/series/${series.id}`);
	}

	/**
	 * Adds a series to the user database /users/${userid}/series.
	 *
	 * @param {Series} series
	 * @memberof FirebaseService
	 */
	addSeriesToUser(series: Series): void {
		const uid = this.auth.getUser().uid;
		this.write(series, `/users/${uid}/series/${series.id}`);
	}

	/**
	 * Returns true if the series is in the database at /series entry.
	 *
	 * @param {Series} series
	 * @returns {boolean}
	 * @memberof FirebaseService
	 */
	isSeriesInDatabase(series: Series): boolean {
		const entry = this.get(`/series/${series.id}`);
		if (entry.length === 0) {
			return false;
		}
		return true;
	}

	/**
	 * Returns true if the series is in the database at /users/${userid}/series entry.
	 *
	 * @param {Series} series
	 * @returns {boolean}
	 * @memberof FirebaseService
	 */
	isSeriesInUserDatabase(series: Series): boolean {
		const uid = this.auth.getUser().uid;
		const entry = this.get(`/users/${uid}/series/${series.id}`);
		if (entry.length === 0) {
			return false;
		}
		return true;
	}

	/**
	 * Returns all series from Firebase located in /series
	 * 
	 * @memberof FirebaseService
	 */
	getSeries(): Array<Series> {
		const uid = this.auth.getUser().uid;
		const seriesDb = this.get(`/series/`);
		const result: Array<Series> = [];
		seriesDb.forEach(element => {
			result.push(element);
		});
		return result;
	}


	/**
	 * Returns all series from Firebase located in /users/${userid}/series/
	 * 
	 * @returns {Array<Series>}
	 * @memberof FirebaseService
	 */
	getUserSeries(): Array<Series> {
		const uid = this.auth.getUser().uid;
		const seriesDb = this.get(`/users/${uid}/series/`);
		const result: Array<Series> = [];
		seriesDb.forEach(element => {
			result.push(element);
		});
		return result;
	}

	/**
	 * Checks if the user has a database entry.
	 * 
	 * @returns {boolean} 
	 * @memberof FirebaseService
	 */
	hasUserDb(): boolean {
		const uid: string = this.auth.getUser().uid;
		if (uid) {
			const db = this.get('/users/' + uid);
			console.log(db);
			console.log(`db.length ${db.length}`);
			if (db.length !== 0) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	/**
	 * Creates a database entry for the current logged in user.
	 * 
	 * @memberof FirebaseService
	 */
	createUserDb(): void {
		const uid = this.auth.getUser().uid;
		const userData = {
			name: this.auth.getUser().displayName,
			email: this.auth.getUser().email,
			series: {
			}
		};
		this.write(userData, '/users/' + uid);
	}

	/**
	 * Removes data from a specific entry in firebase.
	 * 
	 * @param {string} nodeString 
	 * @memberof FirebaseService
	 */
	remove(nodeString: string) {
		const node = this.db.list(nodeString);
		node.remove();
	}

	/**
	 * Returns data from a specific entry in firebase as array.
	 * 
	 * @param {string} nodeString 
	 * @returns {Array<any>} 
	 * @memberof FirebaseService
	 */
	get(nodeString: string): Array<any> {
		const node = this.db.list(nodeString);
		const result = [];
		node.forEach((element: Array<any>) => {
			result.push(element);
		});
		return result[0];
	}

	/**
	 * Writes data to a specific entry in firebase.
	 * 
	 * @param {*} value 
	 * @param {string} nodeString 
	 * @memberof FirebaseService
	 */
	write(value: any, nodeString: string) {
		const node = this.db.list('/');
		node.update(nodeString, value);
	}
}
