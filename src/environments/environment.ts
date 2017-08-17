// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyBIdEMoGyVhG7vEuFONf43h9K4lJvqbjg8',
		authDomain: 'viewcachu-firebase-mock.firebaseapp.com',
		databaseURL: 'https://viewcachu-firebase-mock.firebaseio.com',
		projectId: 'viewcachu-firebase-mock',
		storageBucket: 'viewcachu-firebase-mock.appspot.com',
		messagingSenderId: '506827361279'
	},
	themoviedb: '?api_key=2e74839a423b1266f0ccf5043bade403'
};
