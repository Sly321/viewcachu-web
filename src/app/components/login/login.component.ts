import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user: Observable<firebase.User>;

	constructor(public afAuth: AngularFireAuth) {
		this.user = afAuth.authState;
		console.log(this.user);
	}

	ngOnInit() {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				console.log('isloggedin');
			} else {
				console.log('is NOT logged in');
			}
		});
	}

	login() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res) => {
			console.log(res);
		});
	}

	logout() {
		this.afAuth.auth.signOut();
	}

	// checkUsername(event: any, username: string) {
		// if username vorhanden dann pin
		// else if username not vorhanden erstellen?
	// }

	/* login(event: any, username: string, password: string) {
        var self = this;
        event.preventDefault();
        let body = JSON.stringify({ username, password });
        this.http.post('http://slyox.de:3001/sessions/create', body, { headers: contentHeaders })
            .subscribe(
            response => {
                self.indicatorElement.classList.remove("bounceInDown", "shake", "bounce", "wrong", "success");
                self.indicatorElement.classList.add("bounce", "success");
                localStorage.setItem('id_token', response.json().id_token);
		setTimeout(() => {
	                self.router.navigate(['']);
                }, 1000);
            },
            error => {
                self.indicatorElement.classList.remove("bounceInDown", "shake", "bounce", "wrong", "success");
                self.indicatorElement.classList.add("shake", "wrong");
		var t = new Audio('app/resources/audio/zanarkand.mp3'); 
		t.load();
		t.play();
                console.log(error.text());
                setTimeout(() => {
                    self.indicatorElement.classList.remove("bounceInDown", "shake");
                }, 1000);
            }
            );
    } */

	/* signup(event: any) {
		event.preventDefault();
		this.router.navigate(['signup']);
	} */


}
