!function(){"use strict";$(document).ready(function(){$(".single-item").slick({dots:!0,autoplay:!0,autoplaySpeed:8e7,prevArrow:'<div class="slider-prev"><svg viewBox="0 0 36 100"><line x1="35.9" y1="0.5" x2="0.8" y2="54.1"/><line x1="35.9" y1="99.5" x2="0.8" y2="54.1"/></svg></div>',nextArrow:'<div class="slider-next"><svg viewBox="0 0 36 100"><line x1="0.8" y1="0.5" x2="35.9" y2="54.1"/><line x1="0.8" y1="99.5" x2="35.9" y2="54.1"/></svg></div>'}),$("#main_nav").sticky({topSpacing:0}),$.scrollIt({easing:"easy-in",scrollTime:600});var e={"default":function(){setTimeout(function(){$(".overpage").removeClass("opened")},50),$("body").removeClass("overpaged")},project:function(e){var a=e.namedParams.projname;setTimeout(function(){$('.overpage[for="'+a+'"]').addClass("opened")},50),$("body").addClass("overpaged")}};Aviator.pushStateEnabled=!1,Aviator.setRoutes({"/":{target:e,"/":"default"},"/projects":{target:e,"/:projname":"project"}}),Aviator.dispatch()})}();