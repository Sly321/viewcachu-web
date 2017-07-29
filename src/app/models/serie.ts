export class Serie {
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
	 * @type {Array<Number>}
	 * @memberof Serie
	 */
	genre_ids: Array<Number>;

	id: number;
	name: string;
	origin_country: Array<string>;
	original_language: string;
	original_name: string;
}
