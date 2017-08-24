import { Series, Season, Episode } from '../models/series';

/**
 * Helper class to convert plain javascript object responses into series class objects.
 * 
 * @export
 * @class SeriesConverter
 */
export class SeriesConverter {

	/**
	 * Converts a firebase reponse to a Series Class Object.
	 * 
	 * @static
	 * @param {*} response Firebase response of an single object node call.
	 * @returns {Series} 
	 * @memberof SeriesConverter
	 */
	public static convertResponseToSeries(response: any): Series {
		const seasons = this.convertResponseToSeasonArray(response.seasons);
		const series = new Series(response.id, response.name, response.overview,
			response.airDate, response.posterUrl, response.rating, response.votes, seasons);
		return series;
	}

	private static convertResponseToSeasonArray(response: any): Array<Season> {
		const seasonArray = new Array<Season>();
		response.forEach(element => {
			seasonArray.push(this.convertResponseToSeason(element));
		});
		return seasonArray;
	}

	private static convertResponseToSeason(response: any): Season {
		const season = new Season();
		const episodes = new Array<Episode>();
		response.episodes.forEach(epEl => {
			episodes.push(this.convertResponseToEpisode(epEl));
		});
		return season;
	}

	private static convertResponseToEpisode(response: any): Episode {
		return new Episode(response.name, response.overview, response.airDate);
	}
}
