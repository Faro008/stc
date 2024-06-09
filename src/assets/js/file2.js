/*window.addEventListener('scroll', rotateImg);
let rotation = 0;
	function rotateImg() {
	  rotation += 1; // add 90 degrees, you can change this as you want
	  if (rotation === 180) {
		// 360 means rotate back to 0
		rotation = 0;
	  }
	  document.querySelector("._transform").style.transform = `translate(${rotation}px)`;
	}*/




/*`rotateX(${rots.x}deg) rotateY(${rots.y}deg) rotateZ(${rots.z}deg)`*/



/*const moveItems = document.querySelectorAll('._transform');

let rotation  = 0;

window.addEventListener('scroll', moveOnScroll);
	function moveOnScroll(){
		for (let moveIndex of moveItems){
		const moveItems = moveIndex;
		const moveItemsY = offset(moveItems).left;
		const moveItemsHeight = moveItems.offsetHeight;
		var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
	  rotation  += 1;
   } else {
	  rotation  -= .9;
   }

			moveItems.style.transform = `translate(${rotation }px)`;
			}
		function offset(el){
	const rect = el.getBoundingClientRect();
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	return {left: rect.top + window.scrollLeft}
}
	}*/
/* var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
	  rotation  += .9;
   } else {
	  rotation  -= .9;
   }
*/




	/*	var result = document.getElementById('result');
		var scrollableElement = document.getElementById('move');
		scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);
let down = 'down';
let up = 'up';

		function findScrollDirectionOtherBrowsers(event){
			var delta;
			if (event.wheelDelta){
				delta = event.wheelDelta;
			}else{
				delta = -1 *event.deltaY;
			}
			if (delta < 0){
console.log(down);
			}else if (delta > 0){
console.log(up);
			}
		}*/






