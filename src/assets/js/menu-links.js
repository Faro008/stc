
/*$(".container__popup__menu__nav>ul>li>a").click(function(e) {

	$(".container__popup__menu__nav>ul>li").removeClass('_active');

	$(this).addClass('_active');


	localStorage.lang = this.getAttribute('href');

});

$(window).on("load",function(event) {

  var lang = localStorage.lang;
	console.log(lang);
  $('a[href="'+lang+'"]').parents("li").addClass('_active');



});


/*const currentLinks = document.querySelectorAll('.container__popup__menu__nav>ul>li>a');



currentLinks.forEach(clickLinks);
	function clickLinks(item){
	item.addEventListener("click", function(evt){
			let currentLink = item;




			if( ! currentLink.classList.contains("_active")){
				currentLinks.forEach(function(item){
					item.classList.remove("_active");
				});

				currentLink.classList.add("_active");
localStorage.lang = currentLink.getAttribute('href');




			}
		else{

			evt.preventDefault();

		}

		});

};

$(window).on("load",function(event) {

  var lang = localStorage.lang;
	console.log(lang);
  $('a[href="'+lang+'"]').parents("li").addClass('_active');




});*/


/*const currentLinks = document.querySelectorAll('.container__popup__menu__nav>ul>li>a');
let hash = window.location.href;


currentLinks.forEach(function(item){
	item.addEventListener("DOMContentLoaded", function(evt){
		let currentLink = item;
			var href = currentLink.href;
		console.log(href );
		console.log(currentLink );
		evt.preventDefault();

			if( ! currentLink.classList.contains("_active")){
				currentLinks.forEach(function(item){
					item.classList.remove("_active");
				});
				if(hash == href){

				currentLink.classList.add("_active");}

			}
		/*else{
evt.preventDefault();

		}
	});
});*/

/*$(window).load(function () {



 var url = location.pathname;



		$('.container__popup__menu__nav>ul>li').each(function() {



			var href = $(this).find('a').attr('href')

			if(url == href) {

				$(this).addClass("active");

			}

		});



  });*/

