export class AuthentificationMock {
	uid: number;

	constructor() {
		this.uid = 1234;
	}

	getUser() {
		return { uid: this.uid };
	}

	canActivate() {
	}

	login() {
	}

	logout() {
	}

	setUid(val: number) {
		this.uid = val;
	}
}
