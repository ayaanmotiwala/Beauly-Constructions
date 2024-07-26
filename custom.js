$(document).ready(function(){
    $('.galary-curosol').slick();
    AOS.init({
		duration: 1000,
	  })
	  window.addEventListener('load', AOS.refresh);
});
