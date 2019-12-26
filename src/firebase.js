import firebase from 'firebase/app';

const config = {
	apiKey: 'AIzaSyBIUa0UFimfB4uxT4kOGW_2ezcW6fGfw-8',
	authDomain: 'ml-image-recognition-67ee0.firebaseapp.com',
	databaseURL: 'https://ml-image-recognition-67ee0.firebaseio.com',
	projectId: 'ml-image-recognition-67ee0',
	storageBucket: 'ml-image-recognition-67ee0.appspot.com',
	messagingSenderId: '1030876500796',
	appId: '1:1030876500796:web:158f05589ab52a047e8439',
	measurementId: 'G-L49GGZKYLL'
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}
