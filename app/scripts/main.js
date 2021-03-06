(function () {
   'use strict';
   $(document).ready(function(){
			$('.single-item').slick({
				dots: true,
				autoplay: true,
				autoplaySpeed: 80000000,
        prevArrow: '<div class="slider-prev"><svg viewBox="0 0 36 100"><line x1="35.9" y1="0.5" x2="0.8" y2="54.1"/><line x1="35.9" y1="99.5" x2="0.8" y2="54.1"/></svg></div>',
        nextArrow: '<div class="slider-next"><svg viewBox="0 0 36 100"><line x1="0.8" y1="0.5" x2="35.9" y2="54.1"/><line x1="0.8" y1="99.5" x2="35.9" y2="54.1"/></svg></div>'
			});
      $('#main_nav').sticky({topSpacing:0});

      $.scrollIt({
        /*upKey: 38,
        downKey: 40,*/
        easing: 'easy-in',
        scrollTime: 600,
      });

      var targets = {
        default: function () {
          var videoWrap = $('.opened .video-wrapper');
          setTimeout(function() {
            $('.overpage').removeClass('opened');
            var iframe = videoWrap.children().first();
            iframe.detach().appendTo(videoWrap);
          }, 50);
          $('body').removeClass('overpaged');

          //send google analitic pageview
          ga('set', 'page', '/');
          ga('send', 'pageview');
        },
        project: function (request) {
          var proj = request.namedParams.projname;
          setTimeout(function() {
            $('.overpage[for="'+proj+'"]').addClass('opened');
          }, 50);
          $('body').addClass('overpaged');
          ga('set', 'page', '/projects/' + proj);
          ga('send', 'pageview');
        },
      };

      Aviator.pushStateEnabled = false;
      Aviator.setRoutes({
        '/': {
          target: targets,
          '/': 'default'
        },
        '/projects': {
          target: targets,
          '/:projname': 'project',
        }
      });

      Aviator.dispatch();

		});
}());
