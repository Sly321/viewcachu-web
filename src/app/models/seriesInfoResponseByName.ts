/**
 * Represents the Data Model you receive for searching a series by name.
 *
 * @export
 * @class SeriesInfoResponseByName
 */
export class SeriesInfoResponseByName {
	/**
	 * Backdrop Poster path of this series with .jpg at the end. You need image url of themoviedb to show them.
	 *
	 * @type {string}
	 * @memberof SeriesInfoResponseByName
	 */
	backdropd_path: string;

	/**
	 * Date of the first airing in the tv.
	 *
	 * @type {string}
	 * @memberof SeriesInfoResponseByName
	 */
	first_air_date: string;

	/**
	 * Genre IDs of this series.
	 *
	 * @type {Array<Number>}
	 * @memberof SeriesInfoResponseByName
	 */
	genre_ids: Array<Number>;

	/**
	 * ID of the series.
	 *
	 * @type {number}
	 * @memberof SeriesInfoResponseByName
	 */
	id: number;

	/**
	 * Name of the series.
	 *
	 * @type {string}
	 * @memberof SeriesInfoResponseByName
	 */
	name: string;

	/**
	 * Origin country of the series.
	 *
	 * @type {Array<string>}
	 * @memberof SeriesInfoResponseByName
	 */
	origin_country: Array<string>;

	/**
	 * Original language of the series.
	 *
	 * @type {string}
	 * @memberof SeriesInfoResponseByName
	 */
	original_language: string;

	/**
	 * Original name of the series.
	 *
	 * @type {string}
	 * @memberof SeriesInfoResponseByName
	 */
	original_name: string;

	/**
	 * Overview text description of the series.
	 *
	 * @type {string}
	 * @memberof SeriesInfoResponseByName
	 */
	overview: string;

	/**
	 * Popularity of this series as number.
	 *
	 * @type {number}
	 * @memberof SeriesInfoResponseByName
	 */
	popularity: number;

	/**
	 * Poster path of this series with .jpg at the end. You need image url of themoviedb to show them.
	 *
	 * @type {string}
	 * @memberof SeriesInfoResponseByName
	 */
	poster_path: string;

	/**
	 * Voting average of this series.
	 *
	 * @type {number}
	 * @memberof SeriesInfoResponseByName
	 */
	vote_average: number;

	/**
	 * Number of total votings of this series.
	 *
	 * @type {number}
	 * @memberof SeriesInfoResponseByName
	 */
	vote_counter: number;
}
