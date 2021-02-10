function pageLoad() {

	let _root = document.getElementById('root');

	_root.insertAdjacentHTML('afterbegin', '<div class="main-div"></div>');
	
	let _mainDiv = document.querySelector('.main-div');
	_mainDiv.insertAdjacentHTML('afterbegin', '<div class="rectangle"></div>');

	let _rectangle = document.querySelector('.rectangle');
	_rectangle.insertAdjacentHTML('afterbegin', '<button><a href="./index.html">Home</a></button>')
	
}

window.addEventListener('load', pageLoad);

