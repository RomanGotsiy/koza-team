(function () {
   'use strict';
   $(document).ready(function(){
			$('.single-item').slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 4000,
			});

      $('#main_nav').sticky({topSpacing:0});
		});
}());
