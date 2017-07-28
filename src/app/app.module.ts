/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { Authentification } from './services/authentification/authentification.service';
import { routes } from './app.routes';

@NgModule({
	declarations: [
		LoginComponent,
		HomeComponent,
		ContentComponent
	],
	imports: [
		BrowserModule, RouterModule.forRoot(routes)
	],
	providers: [ Authentification ],
	bootstrap: [
		ContentComponent
	]
})
export class AppModule { }
