function pageLoad() {
	let _root = document.getElementById('root');
	_root.insertAdjacentHTML('afterbegin', '<div class="main-div"></div>');
	let _mainDiv = document.querySelector('.main-div');
	_mainDiv.insertAdjacentHTML('afterbegin', '<h1 class="main-title">Szeidl Balázs</h1>');
	let _mainTitle = document.querySelector('.main-title');
	_mainTitle.insertAdjacentHTML('afterend', '<h2 class="subtitle">Gyakorlatok</h2>');
	let _subTitle = document.querySelector('.subtitle');
	_subTitle.insertAdjacentHTML('afterend', '<div class="linkbar"></div>');
	let _linkBar = document.querySelector('.linkbar');
	_linkBar.insertAdjacentHTML('afterbegin', '<a href="./p1.html">P1</a>')
	_linkBar.insertAdjacentHTML('beforeend', '<a href="./p2.html">P2</a>')



}

window.addEventListener('load', pageLoad);