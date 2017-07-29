import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Serie } from '../../models/serie';
import { environment } from '../../../environments/environment';

@Injectable()
export class SeriesapiService {
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
	}

	findSerieByName(name: string, callback: any): void {
		const url = `${this.API_URL}${this.BY_NAME}${environment.themoviedb}&query=${name}`;
		const response = this.callApi(url, callback, false);
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
