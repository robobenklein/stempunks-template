(function(jQuery) {
  jQuery(function() {
    jQuery(window).scroll(function() {
      var top = jQuery(window).scrollTop();
      jQuery(".slide-in").each(function() {
        var thisTop = jQuery(this).offset().top;
        var height = jQuery(this).height();
        if ((top > (thisTop - height)) && !jQuery(this).hasClass("slid")) {
          jQuery(this).addClass("slid");
        }
      });
      var carouselTop = jQuery('.bg').height();
      if (top > carouselTop) {
        jQuery('.carousel').carousel('pause');
        console.log("pause");
      } else {
        jQuery('.carousel').carousel('cycle');
        console.log("cycle");
      }
    });
    jQuery('.carousel').carousel({
      pause: false,
      interval: 8000
    });
    jQuery("a[data-toggle='tab']").click(function() {
      jQuery(this).addClass("active");
      jQuery(this).parent().siblings().each(function() {
        jQuery(this).children("a").first().removeClass("active");
      });
    });
    jQuery(window).scroll(function() {
      if (jQuery(window).height() > jQuery(window).scrollTop()) {
        var parallax = (jQuery(window).scrollTop() * 1) / 3;
        jQuery(".bg img").css('marginTop', parallax + "px");
      }
    });
    jQuery("form .form-control").focus(function() {
      jQuery(this).siblings("label").first().children("i").first().css({
        "color": "#aaa",
        "left": 0
      });
    });
    jQuery("form .form-control").blur(function() {
      jQuery(this).siblings("label").first().children("i").first().css({
        "color": "transparent",
        "left": "-20px"
      });
    });
//    jQuery(function() {
//      jQuery('.gallery').mixitup({
//        easing: 'snap',
//          resizeContainer: true
//      });
//    });
//    var $container = jQuery('.masonry-grid');
//    $container.imagesLoaded(function() {
//      $container.masonry({
//        itemSelector: '.masonry-grid .item',
//        gutter: 0
//      });
//      jQuery(".masonry-grid .item").css("opacity", "1");
//    });
    jQuery(".collapse").collapse({
      toggle: false
    })
    jQuery(".navbar-header a.icon").click(function() {
      jQuery(this).toggleClass("active");
      jQuery(this).siblings("a.icon").each(function() {
        jQuery(this).removeClass("active");
        var target = jQuery(this).data("target");
        jQuery(target).collapse("hide");
      })
    });
    jQuery("a[data-toggle='collapse']").click(function() {
      jQuery(this).parent().parent(".panel-heading").toggleClass("active");
    });
  });
})(jQuery);
