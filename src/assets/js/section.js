gsap.registerPlugin(ScrollTrigger);


  gsap.utils.toArray('.gsap__img__gallery').forEach((section, index) => {
	const w = section.querySelector('.wrapper__img__gallery__liner');
	const [x, xEnd] = index % 2 ? ['0%', '-10%'] : ['-10%', '0%'];
	gsap.fromTo(w, { x }, {
	  x: xEnd,
	  scrollTrigger: {
		trigger: section,
		scrub: 2 } });


  });
