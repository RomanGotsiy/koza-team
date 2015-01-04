(function () {
   'use strict';
   $(document).ready(function(){
			$('.single-item').slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 4000,
        prevArrow: '<div class="slider-prev"><svg><line x1="35.9" y1="0.5" x2="0.8" y2="54.1"/><line x1="35.9" y1="99.5" x2="0.8" y2="54.1"/></svg></div>',
        nextArrow: '<div class="slider-next"><svg><line x1="0.8" y1="0.5" x2="35.9" y2="54.1"/><line x1="0.8" y1="99.5" x2="35.9" y2="54.1"/></svg></div>'
			});
      $('#main_nav').sticky({topSpacing:0});

      $.scrollIt({
        /*upKey: 38,
        downKey: 40,*/
        easing: 'easy-in',
        scrollTime: 600,
      });
		});
}());
