/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { routes } from './app.routes';

@NgModule({
	declarations: [
		LoginComponent,
		HomeComponent
	],
	imports: [
		BrowserModule, RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [
		LoginComponent
	]
})
export class AppModule { }
