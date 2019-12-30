import firebase from 'firebase';
//agrega tus credenciales
const config = {
	apiKey: 'xxxxxxxxxxxxxxxxxxxxxx',
	authDomain: 'xxxxxxxxxxxxxxxxxxxx',
	databaseURL: 'xxxxxxxxxxxxxxxxxxxxxxx',
	projectId: 'xxxxxxxxxxxxxxxxxxxxxxxx',
	storageBucket: 'xxxxxxxxxxxxxxxxxxx',
	messagingSenderId: 'xxxxxxxxxxxxxxxxxxxx',
	appId: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
	measurementId: 'xxxxxxxxxxxxxxx'
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}
