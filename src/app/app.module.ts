/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/** Components */
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { BoardComponent } from './components/board/board.component';

/** Services */
import { Authentification } from './services/authentification/authentification.service';
import { CookieService } from './services/cookie/cookie.service';
import { SeriesapiService } from './services/seriesapi/seriesapi.service';
import { FirebaseService } from './services/firebase/firebase.service';

/** 3rd Party Modules */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

/** Additional */
import { routes } from './app.routes';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		LoginComponent,
		HomeComponent,
		ContentComponent,
		SearchComponent,
		SearchResultComponent,
		BoardComponent
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
	providers: [ Authentification, CookieService, SeriesapiService, FirebaseService ],
	bootstrap: [
		ContentComponent
	]
})
export class AppModule { }
