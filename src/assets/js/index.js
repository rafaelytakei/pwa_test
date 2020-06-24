/* Test import of a JavaScript function, an SVG, and Sass */

import 'Styles/main.scss';

import HelloWorld from 'Modules/HelloWorld';
import WebpackLogo from 'Images/webpack-logo.svg';
import buildNavBar from 'Modules/navbar';

/* import $ from 'jquery'; */

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js').then(
			(registration) => {
				console.log(`Service Worker registered! Scope: ${registration.scope}`);
			},
			(error) => {
				console.error(`Service Worker registration failed: ${error}`);
			}
		);
	});
}

window.addEventListener('DOMContentLoaded', () => {
	buildNavBar();
	console.log('Hello!');

	const mainImageDiv = document.getElementById('main-image-div');

	const mainImage = document.createElement('img');
	mainImage.src = WebpackLogo;
	mainImage.id = 'index-logo';
	mainImageDiv.appendChild(mainImage);

	const textDiv = document.getElementById('text-div');
	const text = document.createElement('h1');
	text.classList.add('col-12');
	text.textContent = `~ ${HelloWorld()}~`;
	textDiv.appendChild(text);
});
