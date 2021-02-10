function pageLoad() {

	let _root = document.getElementById('root');
	_root.insertAdjacentHTML('afterbegin', '<div class="main-div"></div>');
	
	let _mainDiv = document.querySelector('.main-div');
	
	_mainDiv.insertAdjacentHTML('afterbegin', '<div class="rectangle1"></div>');
	let _rectangle1 = document.querySelector('.rectangle1');	
	
	_mainDiv.insertAdjacentHTML('beforeend', '<div class="rectangle2"></div>')
	let _rectangle2 = document.querySelector('.rectangle2');

	_rectangle1.insertAdjacentHTML('afterbegin', '<button><a href="./index.html">Home</a></button>')
	


}

window.addEventListener('load', pageLoad);