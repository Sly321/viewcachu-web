export class Series {
	/**
	 * Image path.
	 *
	 * @type {string}
	 * @memberof Serie
	 */
	backdropd_path: string;

	/**
	 * Date of the first airing in the tv.
	 *
	 * @type {string}
	 * @memberof Serie
	 */
	first_air_date: string;

	/**
	 * Genre IDs of this series.
	 *
	 * @type {Array<number>}
	 * @memberof Serie
	 */
	genre_ids: Array<number>;

	id: number;
	name: string;
	origin_country: Array<string>;
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_counter: number;
}
