/**
 * Class Authentification
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable()
export class Authentification implements CanActivate {
	constructor(private router: Router) { }

	canActivate() {
		if (1 + 1 === 3 || environment.login) { // do something
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}
}
