const burgerMenu = document.querySelectorAll('[data-burger]');
const popapMenu = document.querySelector('.container__popup__menu');
const closedShow = document.querySelector('.container__burger');
const closedFooter =document.getElementById('footer');
burgerMenu.forEach(function (item) {
	item.addEventListener('click', function () {
		popapMenu.classList.toggle('show');
		closedShow.classList.toggle('closed');
		closedFooter.classList.toggle('closed');
	});

});
