import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

	constructor() {

	}

	/**
	 * Returns the value of the cookie.
	 *
	 * @param {string} cname Name of the cookie.
	 * @returns Value of the cookie.
	 * @memberof CookieService
	 */
	getCookie(cname: string) {
		const name = cname + '=';
		const ca = document.cookie.split (';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt (0) === ' ') {
				c = c.substring( 1);
			}
			if (c.indexOf (name) === 0) {
				return JSON.parse(c.substring (name.length, c.length));
			}
		}
		return;
	}

	/**
	 *
	 * Sets a document.cookie with expiration date t+10years.
	 *
	 * @param {string} name Name of the cookie
	 * @param {string} value Value of the cookie
	 * @memberof CookieService
	 */
	setCookie(name: string, value: string) {
		const d = new Date();
		const exyears = 10;
		d.setTime (d.getTime () + (exyears * 365 * 24 * 60 * 60 * 1000));
		const expires = 'expires=' + d.toUTCString ();
		document.cookie = name + '=' + JSON.stringify(value) + '; ' + expires + '; path=/';
	}

	/**
	 * Checks if the cookie exists, if it exists it will get a expiration date of 1970.
	 *
	 * @param {any} cname Name of the cookie.
	 * @memberof CookieService
	 */
	removeCookie(cname) {
		if (this.getCookie(cname)) {
			document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
		}
	}
}
