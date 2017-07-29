/**
 * Class Authentification
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from '../cookie/cookie.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { environment } from '../../../environments/environment';

@Injectable()
export class Authentification implements CanActivate {
	user: Observable<firebase.User>;
	isLoggedIn: boolean;

	constructor(private router: Router, public afAuth: AngularFireAuth, private cs: CookieService) {
		this.user = afAuth.authState;

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				console.log(user);
				this.user = user;
				this.isLoggedIn = true;
				cs.setCookie('usertoken', this.user.refreshToken);
			} else {
				console.log('logged out');
				this.user = null;
				this.isLoggedIn = false;
				cs.removeCookie('usertoken');
				router.navigate(['/login']);
			}
		});
	}

	canActivate() {
		if (this.cs.getCookie('usertoken')) {
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}

	login() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
		});
	}

	logout() {
		this.afAuth.auth.signOut();
	}
}
