(function($){$(function(){$(window).scroll(function(){var top=$(window).scrollTop();$(".slide-in").each(function(){var thisTop=$(this).offset().top;var height=$(this).height();if((top>(thisTop- height))&&!$(this).hasClass("slid")){$(this).addClass("slid");}});var carouselTop=$('.bg').height();if(top>carouselTop){$('.carousel').carousel('pause');console.log("pause");}
else{$('.carousel').carousel('cycle');console.log("cycle");}});$('.carousel').carousel({pause:false,interval:8000});$("a[data-toggle='tab']").click(function(){$(this).addClass("active");$(this).parent().siblings().each(function(){$(this).children("a").first().removeClass("active");});});$(window).scroll(function(){if($(window).height()>$(window).scrollTop()){var parallax=($(window).scrollTop()*1)/3;$(".bg img").css('marginTop',parallax+"px");}});$("form .form-control").focus(function(){$(this).siblings("label").first().children("i").first().css({"color":"#aaa","left":0});});$("form .form-control").blur(function(){$(this).siblings("label").first().children("i").first().css({"color":"transparent","left":"-20px"});});$(function(){$('.gallery').mixitup({easing:'snap',  resizeContainer:true});});var $container=$('.masonry-grid');$container.imagesLoaded(function(){$container.masonry({itemSelector:'.masonry-grid .item',gutter:0});$(".masonry-grid .item").css("opacity","1");});$(".collapse").collapse({toggle:false})
$(".navbar-header a.icon").click(function(){$(this).toggleClass("active");$(this).siblings("a.icon").each(function(){$(this).removeClass("active");var target=$(this).data("target");$(target).collapse("hide");})});$("a[data-toggle='collapse']").click(function(){$(this).parent().parent(".panel-heading").toggleClass("active");});});})(jQuery);