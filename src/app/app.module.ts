/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { Authentification } from './services/authentification/authentification.service';
import { CookieService } from './services/cookie/cookie.service';
import { SeriesapiService } from './services/seriesapi/seriesapi.service';
import { routes } from './app.routes';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
	declarations: [
		LoginComponent,
		HomeComponent,
		ContentComponent,
		SearchComponent,
		SearchResultComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		HttpModule,
		FormsModule
	],
	providers: [ Authentification, CookieService, SeriesapiService ],
	bootstrap: [
		ContentComponent
	]
})
export class AppModule { }
