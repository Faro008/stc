const animItems = document.querySelectorAll('._anim-items');


/*let animItemsHeight = animItems.offsetHeight;*/



window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {

		for (let index of animItems){
			const animItems = index;
			const animItemsHeight = animItems.offsetHeight;
			const animItemsOffset = offset(animItems).top;
			const animStart = 5;
			let animItemsPoint = window.innerHeight -  animItemsHeight / animStart;
			if (animItemsHeight > window.innerHeight){
				animItemsPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemsOffset - animItemsPoint) && pageYOffset < (animItemsOffset + animItemsHeight)){
				animItems.classList.add('_active');
			}
			else{
				if(!animItems.classList.contains('_anim-not')){
				animItems.classList.remove('_active');
					}
			}

		}


function offset(el){
	const rect = el.getBoundingClientRect();
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top: rect.top + window.scrollTop}
}
		}
setTimeout(() =>{
	animOnScroll();
}, 300);

