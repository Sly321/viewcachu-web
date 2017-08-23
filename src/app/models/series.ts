/**
 * Represents a series.
 * 
 * @export
 * @class Series
 */
export class Series {
	/** ID of the series from themoviedb */
	private id: number;
	private name: string;
	private overview: string;
	private airDate: Date;
	private posterUrl: string;
	private rating: number;
	private votes: number;
	private seasons: Array<Season>;

	/**
	 * Creates an instance of Series.
	 * 
	 * @param {number} id 
	 * @param {string} [name=''] Name of the series.
	 * @param {string} [overview=''] Descriptionb of the series.
	 * @param {string} [airDate=''] First air date of the series.
	 * @param {string} [posterUrl=''] Poster URL of the series.
	 * @param {number} [rating=0] Average rating of the series.
	 * @param {number} [votes=0] Count of votes on this series.
	 * @param {any} [seasons=new Array<Season>()] Array with seasons and episodes.
	 * @memberof Series
	 */
	constructor(id: number, name = '', overview = '', airDate = '', posterUrl = '', rating = 0, votes = 0, seasons = new Array<Season>()) {
		this.id = id;
		this.name = name;
		this.overview = overview;
		this.airDate = new Date(airDate);
		this.posterUrl = posterUrl;
		this.rating = rating;
		this.votes = votes;
		this.seasons = seasons;
	}

	public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
	}


	public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
	}


	public get $overview(): string {
		return this.overview;
	}

	public set $overview(value: string) {
		this.overview = value;
	}

	public get $airDate(): Date {
		return this.airDate;
	}

	public set $airDate(value: Date) {
		this.airDate = value;
	}

	public get $posterUrl(): string {
		return this.posterUrl;
	}

	public set $posterUrl(value: string) {
		this.posterUrl = value;
	}

	public get $rating(): number {
		return this.rating;
	}

	public set $rating(value: number) {
		this.rating = value;
	}

	public get $votes(): number {
		return this.votes;
	}

	public set $votes(value: number) {
		this.votes = value;
	}

	public get $seasons(): Array<Season> {
		return this.seasons;
	}

	public set $seasons(value: Array<Season>) {
		this.seasons = value;
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
