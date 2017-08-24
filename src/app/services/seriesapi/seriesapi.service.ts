import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Series, Season, Episode } from '../../models/series';
import { SeriesInfoResponseByName } from '../../models/seriesInfoResponseByName';
import { environment } from '../../../environments/environment';

import { SeriesapiServiceInterface } from './seriesapi.interface';

/**
 * Service for the API of themoviedb.org.
 * Developers Guide https://developers.themoviedb.org/3
 *
 * @export
 * @class SeriesapiService
 */
@Injectable()
export class SeriesapiService implements SeriesapiServiceInterface {
	/** Url der API. */
	private API_URL = 'https://api.themoviedb.org/3';

	/** URL der Poster */
	private POSTER_URL = 'https://image.tmdb.org/t/p/w300';

    /** Key um Serien anhand des Namens zu suchen. */
	private BY_NAME = '/search/tv';

	/** Key um Serien datails anhand der ID zu finden. */
	private BY_ID = '/tv/';

	/** Key um Season datails anhand der ID zu finden. */
	private SEASON = '/season/';

	/** Key um Episode datails anhand der ID zu finden. */
	private EPISODE = '/episode/';

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

	/**
	 * Calls the API and returns a Series.
	 * 
	 * @param {number} id ID of the series
	 * @param {*} callback Callback with parameter that returns the data
	 * @memberof SeriesapiService
	 */
	public getSeries(id: number, callback: any): void {
		const url = `${this.API_URL}${this.BY_ID}${id}${environment.themoviedb}${this.LANG_PARAM}`;
		this.callApi(url, callback, false);
	}

	/**
	 * Calls the API and returns a Season.
	 * 
	 * @param {number} id ID of the series
	 * @param {number} season Number of the season
	 * @param {*} callback Callback with parameter that returns the data
	 * @memberof SeriesapiService
	 */
	public getSeriesSeason(id: number, season: number, callback: any): void {
		const url = `${this.API_URL}${this.BY_ID}${id}${this.SEASON}${season}${environment.themoviedb}${this.LANG_PARAM}`;
		this.callApi(url, callback, false);
	}

	/**
	 * Calls the API and returns a Episode
	 * 
	 * @param {number} id ID of the series
	 * @param {number} season Number of the season
	 * @param {number} episode Number of the episode
	 * @param {*} callback Callback with parameter that returns the data
	 * @memberof SeriesapiService
	 */
	public getSeriesEpisode(id: number, season: number, episode: number, callback: any): void {
		let url = `${this.API_URL}${this.BY_ID}${id}${this.SEASON}${season}`;
		url += `${this.EPISODE}${episode}${environment.themoviedb}${this.LANG_PARAM}`;
		this.callApi(url, callback, false);
	}

	/**
	 * 
	 * Returns a complete {@link Series} object with seasons and episodes.
	 * 
	 * @param {number} id ID of the Series
	 * @param {*} [callback=(series: Series) void => {}]  Callback with Series as parameter
	 * @memberof SeriesapiService
	 */
	getCompleteSeries(id: number, callback = (series: Series): void => {}): void {
		const self = this;
		this.getSeries(id, (seriesData) => {
			const name = seriesData.name;
			const overview = seriesData.overview;
			const airDate = seriesData.first_air_date;
			const series: Series = new Series(id, name, overview, airDate);
			series.$posterUrl = `${self.POSTER_URL}${seriesData.backdrop_path}`;
			series.$rating = seriesData.vote_average;
			series.$votes = seriesData.vote_count;
			const lastSeason = seriesData.number_of_seasons;

			console.log(seriesData);

			seriesData.seasons.forEach(seasonIterator => {
				if (seasonIterator.season_number !== 0) {
					self.getSeriesSeason(id, seasonIterator.season_number, (seasonData) => {
						const seasonName = seasonData.name;
						const totalEpisodes = seasonData.episodes.length;
						const seasonNumber = seasonData.season_number;
						const season: Season = new Season(seasonName, totalEpisodes, seasonNumber);

						seasonData.episodes.forEach(episode => {
							season.$episodes.push(new Episode(episode.name, episode.overview, episode.air_date));
						});
						series.$seasons.push(season);

						if (seasonNumber === lastSeason) {
							series.$seasons.sort((a, b) => {
								return a.$seasonNumber - b.$seasonNumber;
							});
							callback(series);
						}
					});
				}
			});
		});
	}

	/**
	 * Calls the API and returns a {@link SeriesInfoResponseByName} Array to the callback.
	 *
	 * @param {string} name Name of the Series that are searched
	 * @callback callback Calls this function after the api call with an Array of SeriesInfoResponseByName
	 * @memberof SeriesapiService
	 */
	public findSerieByName(name: string, callback: any): void {
		const url = `${this.API_URL}${this.BY_NAME}${environment.themoviedb}&query=${name}`;
		const findSeriesByNameCall = (res: any) => {
			callback(res.results);
		};
		this.callApi(url, findSeriesByNameCall, false);
	}

	private callApi(url: string, callback: any, async: boolean) {
		return this.http.get(url, { headers: this.headers })
			.subscribe((data: any) => {
				callback(JSON.parse(data._body));
			},
			(e) => this.handleError(e, url, callback),
			() => { });
	}

	private handleError(error: Response, url: string, callback: any) {
		console.error('this is handle Error');
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
