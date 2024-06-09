
const burger = document.querySelector('.container__burger');
const burgerLogo = document.querySelector('.container__burger__nav');
window.addEventListener('scroll',function(){
	let scrollPos = window.scrollY;
	if(scrollPos > '0'){
		burger.classList.add('show');
		burgerLogo.classList.add('show');

	}
	else{
		burger.classList.remove('show');
		burgerLogo.classList.remove('show');
	}
});


/*Определение направления скрола!!!!!
______________________________________________*/
/*let nullWindow = window.scrollY;
const sreenWidtch = window.screen.width;
const mediaQuery = window.matchMedia('(max-width: 820px)');
function handleTabletChange(e) {
  if (e.matches) {

window.onscroll = function() {

	let currentWindow = window.scrollY;


	if (nullWindow < currentWindow){
		burger.style.paddingTop = "46px";

	}
	else{

		burger.style.paddingTop = '0em';

	}

	 nullWindow = window.scrollY;
};

  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);*/
