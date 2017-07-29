import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Serie } from '../../models/serie';

import { environment } from '../../../environments/environment';

@Injectable()
export class TvdbapiService {
    /** Base Url der Grafiken. */
	private BANNER_URL = 'http://thetvdb.com/banners/_cache/';

	/** Url der API. */
	private API_URL = 'https://api.themoviedb.org/3';

    /** Key um Serien anhand des Namens zu suchen. */
	private BY_NAME = '/search/tv';

    /** Setzt die Ausgabesprache der API, default: Deutsch */
	private LANG_KEY = 'de.xml';

    /** Setzt die Ausgabesprache der API als Parameter, default: Deutsch */
	private LANG_PARAM = '&language=de';

	private headers: Headers;

	constructor(private http: Http) {
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
		this.headers.append('Accept', 'application/json');
		/* this.headers.append('Authorization', 'Bearer FDDE19A386F91E9D');
		this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
		this.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
		this.headers.append('Access-Control-Allow-Origin', '*'); */
	}

	findSerieByName(name: string, callback: any): void {
		/* let url = `${API_URL}${enviroment.tvdbkey}/series/${id}/${LANGUAGE_KEY}`; */
		const url = `${this.API_URL}${this.BY_NAME}${environment.themoviedb}&query=${name}`;

		const response = this.callApi(url, callback, false);

        // return series;
	}

	test2() {
		this.callApi('https://api.themoviedb.org/3/search/movie?api_key=2e74839a423b1266f0ccf5043bade403&query=Jack+Reacher', () => {}, null);
	}

	testWoW() {
		this.callApi('https://eu.api.battle.net/wow/guild/blackrock/rise%20again?fields=members&locale=de_DE&apikey=3x5xtsrj6apy9fawe7mvjqgmh3qdf5au', () => {}, false);
	}

	private callApi(url: string, callback: any, async: boolean) {
		return this.http.get(url, { headers: this.headers })
			.subscribe((data) => {
				callback(data);
			});
			/* .toPromise()
			.catch(this.handleError);
			.then(res => {
				return res;
			}, res => {
				console.log('req error');
				return res;
			})
			.then(res => {
				if(res.status == 200) {
					var data = res.json();
					callback(data);
				} else {
					console.log('404');
					return res;
				}
			}); */
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
