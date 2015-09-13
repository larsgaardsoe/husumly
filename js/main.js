$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }

  $( ".js-bg-facade" ).click(function() {
    $('#billeder').removeClass().addClass('bg-facade');
  });
  
  $( ".js-bg-arbejdsdag" ).click(function() {
    $('#billeder').removeClass().addClass('bg-arbejdsdag');
  });
  
  $( ".js-bg-workshop" ).click(function() {
    $('#billeder').removeClass().addClass('bg-workshop');
  });

});

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}

(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){  
  jQuery.mark.jump();
});

$(window).scroll(function () {

  if ( $(window).width() > 300 || !isiOS ) {

    if ($(window).scrollTop() > 500) {
      $('.back-to-top').fadeIn('fast');
    } else {
      $('.back-to-top').fadeOut('fast');
    }

  }

});

$(window).scroll();