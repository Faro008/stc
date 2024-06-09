const tabsBtn = document.querySelectorAll(".li-tabs");
const tabsItem = document.querySelectorAll("._bootom-content");


	tabsBtn.forEach(tabClick);
	function tabClick(item){
		item.addEventListener("click", function(){
			let currentBtn = item;
			let tabsId = currentBtn.getAttribute("data-tab");
			let currentTab = document.querySelector(tabsId);
			if( ! currentBtn.classList.contains("_active")){
				tabsBtn.forEach(function(item){
					item.classList.remove("_active");
				});
				tabsItem.forEach(function(item){
					item.classList.remove("_active");
				});
				currentBtn.classList.add("_active");
				currentTab.classList.add("_active");
			}

		});

document.querySelector(".li-tabs").click();
};



const sliderBtn = document.querySelectorAll(".slider__buttom");
const sliderItem = document.querySelectorAll(".container__slider");

	sliderBtn.forEach(tabsClick);

	function tabsClick(item){
		item.addEventListener("click", function startClick(){
			let currentSliderBtn = item;
			let idSlider = currentSliderBtn.getAttribute("data-buttom");
			let currentSlider = document.querySelector(idSlider);
			if(!currentSliderBtn.classList.contains("_active")){
				sliderBtn.forEach(function(item){
					item.classList.remove("_active");
				});
				sliderItem.forEach(function(item){
					//item.style.transition = "0s";
					item.style.transform = "translateX(100vw)";
					item.style.transitionProperty = "transform"
					item.style.transitionDelay = ".6s";
					item.style.zIndex = "0";
					});
				currentSliderBtn.classList.add("_active");
				//currentSlider.classList.add("_active");
				currentSlider.style.transitionProperty = "transform"
				currentSlider.style.transition = ".6s";
				currentSlider.style.transform = "none";
				currentSlider.style.transitionDelay = "none";
				currentSlider.style.zIndex = "100";

			}
		});
		document.querySelector(".slider__buttom").click();
		//return tabsClick;
	};

