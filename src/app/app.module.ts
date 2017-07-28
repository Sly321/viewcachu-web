/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { Authentification } from './services/authentification/authentification.service';
import { routes } from './app.routes';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		LoginComponent,
		HomeComponent,
		ContentComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule
	],
	providers: [ Authentification ],
	bootstrap: [
		ContentComponent
	]
})
export class AppModule { }
