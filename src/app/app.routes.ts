/**
 * Routes
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { Authentification } from './services/authentification/authentification.service';

export const routes = [
	{ path: '',           redirectTo: 'home', pathMatch: 'full', canActivate: [Authentification], },
	{ path: 'login',      component: LoginComponent },
	{ path: 'home',       component: HomeComponent, canActivate: [Authentification] },
	{ path: '**',         component: HomeComponent, canActivate: [Authentification] }
    /*children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: Overview },
      { path: 'shell', component: Shell }
    ] },
  { path: '**',         component: HomeComponent, canActivate: [Authentification] }, */
];
