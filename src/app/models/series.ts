export class Series {
	id: number;
	name: string;
	overview: string;
	airDate: Date;
	posterUrl: string;

	/**
	 * Series rating.
	 * 
	 * @type {number}
	 * @memberof Series
	 */
	rating: number;

	/**
	 * Counter of Votes.
	 * 
	 * @type {number}
	 * @memberof Series
	 */
	votes: number;
	seasons: Array<Season>;

	constructor(id: number = 0, name: string = '', overview: string = '', airDate: string = '') {
		this.name = name;
		this.overview = overview;
		this.airDate = new Date(airDate);
		this.seasons = new Array<Season>();
	}
}

export class Season {
	episodes: Array<Episode>;
	episodeAmout: number;
	seasonNumber: number;
	name: string;
	overview: string;

	constructor(name: string, episodeAmout: number, seasonNumber) {
		this.name = name;
		this.episodeAmout = episodeAmout;
		this.seasonNumber = seasonNumber;
		this.episodes = new Array<Episode>();
	}
}

export class Episode {
	name: string;
	overview: string;
	airDate: Date;

	constructor(name: string, overview: string, airdate: string) {
		this.name = name;
		this.overview = overview;
		this.airDate = new Date(airdate);
	}
}
