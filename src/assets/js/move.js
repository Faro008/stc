/*const moveItems = document.querySelectorAll('._transform');

let rotation  = 0;

window.addEventListener('scroll', moveOnScroll);
	function moveOnScroll(){
		for (let moveIndex of moveItems){
		const moveItems = moveIndex;
		const moveItemsY = offset(moveItems).left;
		const moveItemsHeight = moveItems.offsetHeight;

		var lastScrollTop = 0;
let x = 'up';
let y = 'down';
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
	  // downscroll code
	   rotation  += .025;
	   console.log(x);
   } else {
	   rotation  -= .01;
	  console.log(rotation);
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

	  if ((rotation  >= 150) || (rotation  <= -150)) {

rotation = 0;

	  }

			moveItems.style.transform = `translate(${rotation }px)`;
			}
		function offset(el){
	const rect = el.getBoundingClientRect();
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	return {left: rect.top + window.scrollLeft}
}
	}*/
