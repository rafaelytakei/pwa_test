/* Test import of a JavaScript function, an SVG, and Sass */

import 'Styles/main.scss';

import HelloWorld from 'Modules/HelloWorld';
import WebpackLogo from 'Images/webpack-logo.svg';
import buildNavBar from 'Modules/navbar';

/* import $ from 'jquery'; */

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
