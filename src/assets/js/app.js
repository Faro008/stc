
/* document.querySelector(".tiles-gallery")&&(gsap.to(".tiles-gallery .tiles-line:nth-child(2n)",1,{scrollTrigger:{trigger:".tiles-gallery",scroller:"#body-wrap",scrub:2,start:"top bottom",end:"bottom top",toggleActions:"play none none reverse"},xPercent:10}),gsap.to(".tiles-gallery .tiles-line:nth-child(2n-1)",1,{scrollTrigger:{trigger:".tiles-gallery",scroller:"#body-wrap",scrub:2,start:"top bottom",end:"bottom top",toggleActions:"play none none reverse"},xPercent:-10}))})),*/

/*var el = document.getElementById("width");
function update() {
  var n = el.value.replace(/[^0-9]/g,'') // оставить только цифры
    .split('').reverse(); // перевестив массив и развернуть
  if(n.length > 2) n.splice(2,0,'-');
  if(n.length > 5) n.splice(5,0,'-');
  el.value = n.reverse().join('');
}

el.addEventListener("input", update);*/

/*var el = document.querySelectorAll(".input");
console.log(el)
el.forEach(update);
function update(item) {
    item.addEventListener('input',function(){
  var n = item.value.replace(/[^0-9]/g,'')
    .split('').reverse();

  item.value = n.reverse().join('');
    console.log(n)
});
}*/

//console.log('Hi');
