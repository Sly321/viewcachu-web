/**
 * Routes
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Sven Liebig				31.01.2017				Created
 */

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes = [
	{ path: '',           redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login',      component: LoginComponent },
	{ path: '**',         component: HomeComponent }
/*   { path: 'home',       component: Home, canActivate: [Authentification],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: Overview },
      { path: 'shell', component: Shell }
    ] },
  { path: '**',         component: HomeComponent, canActivate: [Authentification] }, */
];
