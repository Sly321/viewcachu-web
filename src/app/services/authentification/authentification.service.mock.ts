export class AuthentificationMock {
	uid: string;

	constructor() {
		this.uid = (Math.random() * 1000).toString().replace('.', '');
	}

	getUser() {
		return { uid: this.uid, displayName: 'display name', email: 'e@mail.com' };
	}

	canActivate() {
	}

	login() {
	}

	logout() {
	}
}
