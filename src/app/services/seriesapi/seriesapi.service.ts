import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Serie } from '../../models/serie';
import { SeriesInfoResponseByName } from '../../models/seriesInfoResponseByName';
import { environment } from '../../../environments/environment';

/**
 *
 * Service for the API of themoviedb.org.
 * Developers Guide https://developers.themoviedb.org/3
 *
 * @export
 * @class SeriesapiService
 */
@Injectable()
export class SeriesapiService {
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
	}

	getSeriesInfoById(id: number, callback: any) {

	}

	getSeriesSeasonsById(id: number, season: number, callback: any): void {
		const url = `${this.API_URL}${this.BY_NAME}${environment.themoviedb}&query=${name}`;
	}

	/**
	 * Calls the API and returns a {@link SeriesInfoResponseByName} Array to the callback.
	 *
	 * @param {string} name Name of the Series that are searched
	 * @callback callback Calls this function after the api call with an Array of SeriesInfoResponseByName
	 * @memberof SeriesapiService
	 */
	findSerieByName(name: string, callback: any): void {
		const url = `${this.API_URL}${this.BY_NAME}${environment.themoviedb}&query=${name}`;
		const response = this.callApi(url, callback, false);
	}

	private callApi(url: string, callback: any, async: boolean) {
		return this.http.get(url, { headers: this.headers })
			.subscribe((data: any) => {
				callback(JSON.parse(data._body).results);
			},
			(e) => this.handleError(e));
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
