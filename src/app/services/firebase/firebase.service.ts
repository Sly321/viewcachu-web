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
		this.write(series, `/series/${series.$id}`);
	}

	/**
	 * Adds a series to the user database /users/${userid}/series.
	 *
	 * @param {Series} series
	 * @memberof FirebaseService
	 */
	addSeriesToUser(series: Series, callback = () => {}): void {
		const uid = this.auth.getUser().uid;
		this.write(series, `/users/${uid}/series/${series.$id}`, callback);
	}

	/**
	 * Calls the database and checks if the series is present.
	 * 
	 * @param seriesId ID of the series.
	  * @param {any} [callback=(val: boolean) => {}] Called with a boolean, true if series is in the database, false if not.
	 * @memberof FirebaseService
	 */
	isSeriesInDatabase(seriesId: number, callback = (val: boolean) => {}): void {
		const entry = this.testget(`/series/${seriesId}`, (value: any) => {
			if (value.length === 0) {
				callback(false);
			} else {
				callback(true);
			}
		});
	}

	/**
	 * Returns true if the series is in the database at /users/${userid}/series entry.
	 *
	 * @param {number} seriesId
	 * @returns {boolean}
	 * @memberof FirebaseService
	 */
	isSeriesInUserDatabase(seriesId: number): boolean {
		const uid = this.auth.getUser().uid;
		const entry = this.get(`/users/${uid}/series/${seriesId}`);
		if (entry === undefined || entry.length === 0) {
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
		console.log(result);
		console.log(result[0]);
		return result[0];
	}

	testget(nodeString: string, callback: any): void {
		const node = this.db.list(nodeString).subscribe((v: any) => {
			callback(v);
		});
	}

	/**
	 * Writes data to a specific entry in firebase.
	 * 
	 * @param {*} value 
	 * @param {string} nodeString 
	 * @memberof FirebaseService
	 */
	write(value: any, nodeString: string, callback = () => {}) {
		const node = this.db.list('/');
		node.update(nodeString, value).then(callback);
	}
}
