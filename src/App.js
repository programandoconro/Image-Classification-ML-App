import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

import * as mobilenet from '@tensorflow-models/mobilenet';

import './firebase';
import { storage } from 'firebase';

const App = () => {
	const [ image, setImage ] = useState([]);
	const [ url, setURL ] = useState('');
	const [ predictions, handlePredictions ] = useState([]);

	const handleImage = (e) => {
		setImage(e.target.files[0]);
		console.log(image);
	};
	const db = storage().ref('/UserPics/' + Math.random());

	const uploadImage = async () => {
		await db.put(image);
		db.getDownloadURL().then((e) => setURL(e));
	};

	const myPrediction = async () => {
		const loadModel = await mobilenet.load();
		const img = document.getElementById('image');
		img.setAttribute('crossOrigin', '');
		console.log(img);
		await loadModel.classify(img).then(function(p) {
			// Classify the image
			console.log('Predictions: ', p);
			handlePredictions(p);
		});
	};

	return (
		<div className="App">
			<h1>Real Time Machine Learning for Image Classification</h1>

			<img src={logo} alt="img" />

			<br />
			<hr />
			<h1>Instructions:</h1>
			<h5>Add target image</h5>
			<input type="file" onChange={(e) => handleImage(e)} />

			<br />
			<h5>Upload the image</h5>
			<button
				onClick={(e) => {
					uploadImage(e.target.files);
				}}
			>
				Upload
			</button>
			<img id="image" src={url || 'https://via.placeholder.com/400x300'} alt="" crossOrigin="anonymous" />
			<br />
			<h5>Click predict and wait classification to appear</h5>
			<button onClick={() => myPrediction()}> Predict</button>
			<hr />
			{predictions.map((e, k) => (
				<li key={k}>
					<h1>{e.className + ': ' + Math.round(e.probability * 100) + '%'}</h1>
				</li>
			))}
		</div>
	);
};

export default App;
