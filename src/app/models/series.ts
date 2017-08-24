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

/**
 * Represents a series season.
 * 
 * @export
 * @class Season
 */
export class Season {
	private name: string;
	private overview: string;
	private seasonNumber: number;
	private episodes: Array<Episode>;
	private episodeAmout: number;

	/**
	 * Creates an instance of Season.
	 * 
	 * @param {string} [name=''] Name of the season.
	 * @param {string} [overview=''] Description of this season.
	 * @param {number} [seasonNumber=0] Number of this season.
	 * @param {any} [episodes=new Array<Episode>()] Array of episodes that are in this season.
	 * @param {number} [episodeAmout=0] Number of total episodes of this season.
	 * @memberof Season
	 */
	constructor(name = '', overview = '', seasonNumber = 0, episodes = new Array<Episode>(), episodeAmout = 0) {
		this.name = name;
		this.overview = overview;
		this.seasonNumber = seasonNumber;
		this.episodes = episodes;
		this.episodeAmout = episodeAmout;
	}

	public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
	}

	public get $overview(): string {
		return this.overview;
	}

	public set $overview(value: string) {
		this.overview = value;
	}

	public get $seasonNumber(): number {
		return this.seasonNumber;
	}

	public set $seasonNumber(value: number) {
		this.seasonNumber = value;
	}

	public get $episodes(): Array<Episode> {
		return this.episodes;
	}

	public set $episodes(value: Array<Episode>) {
		this.episodes = value;
	}

	public get $episodeAmout(): number {
		return this.episodeAmout;
	}

	public set $episodeAmout(value: number) {
		this.episodeAmout = value;
	}
}

/**
 * Represents an episode of a series.
 * 
 * @export
 * @class Episode
 */
export class Episode {
	private name: string;
	private overview: string;
	private airDate: Date;
	private watched: boolean;

	/**
	 * Creates an instance of Episode.
	 * @param {string} [name=''] Name of this episode.
	 * @param {string} [overview=''] Description of this episode.
	 * @param {string} [airdate=''] Air date of this episode.
	 * @memberof Episode
	 */
	constructor(name = '', overview = '', airdate = '', watched = false) {
		this.name = name;
		this.overview = overview;
		this.airDate = new Date(airdate);
		this.watched = watched;
	}

	public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
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

	public get $watched(): boolean {
		return this.watched;
	}

	public set $watched(value: boolean) {
		this.watched = value;
	}
}
