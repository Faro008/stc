!function(){const e=document.querySelectorAll("._anim-items");function t(){for(let o of e){const e=o,n=e.offsetHeight,c=t(e).top,s=5;let r=window.innerHeight-n/s;n>window.innerHeight&&(r=window.innerHeight-window.innerHeight/s),pageYOffset>c-r&&pageYOffset<c+n?e.classList.add("_active"):e.classList.contains("_anim-not")||e.classList.remove("_active")}function t(e){const t=e.getBoundingClientRect();return scrollTop=window.pageYOffset||document.documentElement.scrollTop,{top:t.top+window.scrollTop}}}window.addEventListener("scroll",t),setTimeout((()=>{t()}),300)}(),function(){document.querySelectorAll('input[name="mosqitos-color"]'),document.querySelector(".container__mosqitos svg rect:first-child"),document.querySelectorAll('input[name="mosqitos-type"]'),document.querySelector("#height"),document.querySelector("#width");const e=document.querySelectorAll(".input");document.querySelector("#mosqitos-services"),document.querySelector("#mosqitos-delivery"),document.querySelectorAll('input[name="item-controls"]'),e.forEach((function(e){e.addEventListener("input",(function(){var t=e.value.replace(/[^0-9]/g,"").split("").reverse();t.length=4,e.value=t.reverse().join("")}))}))}(),document.getElementById("data").innerHTML=(new Date).getFullYear(),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("feedbackForm");$("#phone").mask("+7 (999) 999-99-99"),e.addEventListener("submit",(function(t){t.preventDefault(),document.getElementById("name").value,document.getElementById("address").value,document.getElementById("phone").value,document.getElementById("message").value;const o=new FormData(e);fetch("send_feedback.php",{method:"POST",body:o}).then((e=>e.json())).then((e=>{"success"===e.status?alert("Сообщение успешно отправлено!"):alert("Произошла ошибка при отправке сообщения.")})).catch((e=>{console.error("Ошибка при отправке запроса:",e),alert("Произошла ошибка при отправке запроса.")}))}))})),function(){for(var e=window.location.href,t=new URL(e).pathname,o=t.startsWith("/")?t.substring(1):t,n=document.querySelectorAll(".container__popup__menu__nav>ul>li>a"),c=""===o,s=0;s<n.length;s++){var r=n[s].getAttribute("href");if(r&&r===o||c&&"/"===r){var i=n[s].parentNode;"li"===i.tagName.toLowerCase()&&i.classList.add("_active")}}}(),function(){const e=document.querySelectorAll("[data-burger]"),t=document.querySelector(".container__popup__menu"),o=document.querySelector(".container__burger"),n=document.getElementById("footer");e.forEach((function(e){e.addEventListener("click",(function(){t.classList.toggle("show"),o.classList.toggle("closed"),n.classList.toggle("closed")}))}))}(),function(){const e=document.querySelector(".container__burger"),t=document.querySelector(".container__burger__nav");window.addEventListener("scroll",(function(){window.scrollY>"0"?(e.classList.add("show"),t.classList.add("show")):(e.classList.remove("show"),t.classList.remove("show"))}))}(),gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".gsap__img__gallery").forEach(((e,t)=>{const o=e.querySelector(".wrapper__img__gallery__liner"),[n,c]=t%2?["0%","-10%"]:["-10%","0%"];gsap.fromTo(o,{x:n},{x:c,scrollTrigger:{trigger:e,scrub:2}})})),function(){document.querySelectorAll("._svg-hover").forEach((function(e){let t=e;t.onmouseover=function(){t.classList.add("_active")},t.onmouseout=function(){t.classList.remove("_active")}})),document.querySelectorAll(".slider__buttom").forEach((function(e){let t=e;t.onmouseover=function(){t.classList.add("_show")},t.onmouseout=function(){t.classList.remove("_show")}}));const e=document.querySelectorAll("._svg-show");console.log(e),e.forEach((function(e){let t=e;t.onmouseover=function(){t.classList.add("_active")},t.onmouseout=function(){t.classList.remove("_active")}}))}(),function(){const e=document.querySelectorAll(".li-tabs"),t=document.querySelectorAll("._bootom-content");e.forEach((function(o){o.addEventListener("click",(function(){let n=o,c=n.getAttribute("data-tab"),s=document.querySelector(c);n.classList.contains("_active")||(e.forEach((function(e){e.classList.remove("_active")})),t.forEach((function(e){e.classList.remove("_active")})),n.classList.add("_active"),s.classList.add("_active"))})),document.querySelector(".li-tabs").click()}));const o=document.querySelectorAll(".slider__buttom"),n=document.querySelectorAll(".container__slider");o.forEach((function(e){e.addEventListener("click",(function(){let t=e,c=t.getAttribute("data-buttom"),s=document.querySelector(c);t.classList.contains("_active")||(o.forEach((function(e){e.classList.remove("_active")})),n.forEach((function(e){e.style.transform="translateX(100vw)",e.style.transitionProperty="transform",e.style.transitionDelay=".6s",e.style.zIndex="0"})),t.classList.add("_active"),s.style.transitionProperty="transform",s.style.transition=".6s",s.style.transform="none",s.style.transitionDelay="none",s.style.zIndex="100")})),document.querySelector(".slider__buttom").click()}))}();