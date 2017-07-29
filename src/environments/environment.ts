// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	login: true,
	firebase: {
		apiKey: 'AIzaSyDTREoB0u_S_Gm189HK5cDvSJ-z_U6oLKg',
		authDomain: 'viewcachu-firebase.firebaseapp.com',
		databaseURL: 'https://viewcachu-firebase.firebaseio.com',
		projectId: 'viewcachu-firebase',
		storageBucket: 'viewcachu-firebase.appspot.com',
		messagingSenderId: '494938800865'
	}
};
