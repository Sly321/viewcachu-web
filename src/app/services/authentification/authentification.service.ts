import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from '../cookie/cookie.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { environment } from '../../../environments/environment';

/**
 *
 * Implements Methods to login users and get their login state.
 *
 * @export
 * @class Authentification
 * @implements {CanActivate}
 */
@Injectable()
export class Authentification implements CanActivate {
	user: any;
	isLoggedIn: boolean;
	LOGIN_URL = '/login';

	constructor(private router: Router, public afAuth: AngularFireAuth, private cs: CookieService) {
		this.user = null;
		const self = this;

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				self.user = user;
				self.isLoggedIn = true;

				const currentToken = cs.getCookie('usertoken');
				if (currentToken) {
					// Refresh Login
					if (currentToken !== self.user.refreshToken) {
						// Something is wrong
						self.logout();
					} else {
						// User is Valid, refresh is token
						cs.setCookie('usertoken', self.user.refreshToken);
						if (router.url === self.LOGIN_URL) {
							router.navigate(['/']);
						}
					}
				} else {
					// First login
					cs.setCookie('usertoken', self.user.refreshToken);
					router.navigate(['/']);
				}

				cs.setCookie('usertoken', self.user.refreshToken);
			} else {
				self.user = null;
				self.isLoggedIn = false;
				cs.removeCookie('usertoken');
				router.navigate([self.LOGIN_URL]);
			}
		});
	}

	getUser() {
		return this.user;
	}

	canActivate() {
		if (this.cs.getCookie('usertoken')) {
			return true;
		}

		this.router.navigate([this.LOGIN_URL]);
		return false;
	}

	login() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
		});
	}

	logout() {
		this.afAuth.auth.signOut();
		this.cs.removeCookie('usertoken');
		this.router.navigate([this.LOGIN_URL]);
	}
}
