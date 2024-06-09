const iconItems = document.querySelectorAll("._svg-hover");

	iconItems.forEach(function(item){

			let currentIconItems = item;

				currentIconItems.onmouseover=function(){
					currentIconItems.classList.add("_active");
				};

				currentIconItems.onmouseout=function(){
					currentIconItems.classList.remove("_active");
				};

	});


const sliderButtomItems = document.querySelectorAll(".slider__buttom");

	sliderButtomItems.forEach(function(item){

			let currentButtomItems = item;

				currentButtomItems.onmouseover=function(){
					currentButtomItems.classList.add("_show");
				};

				currentButtomItems.onmouseout=function(){
					currentButtomItems.classList.remove("_show");
				};

	});


const svgShowItem = document.querySelectorAll("._svg-show");
console.log(svgShowItem);
	svgShowItem.forEach(function(item){
		let currentSvgShowItem = item;
		currentSvgShowItem.onmouseover=function(){
			currentSvgShowItem.classList.add("_active");
		};
		currentSvgShowItem.onmouseout=function(){
			currentSvgShowItem.classList.remove("_active");
		};
	});