;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(window).on("load", function (e) {
  $('a[href^="#"]:not([role="tab"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      if($target.length>0) {

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 120
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
      }
  });

}); 
// Book a Demo Drawer
$(document).ready(function() {
    $drawerRight = $('.bookademo-drawer-right');
    $cart_list = $('.bookademo-btn, .bookademo-closebtn');
    
    $cart_list.click(function() {
      $(this).toggleClass('active');
      $('.bookademo-drawer-push').toggleClass('bookademo-drawer-pushtoleft');
      $drawerRight.toggleClass('bookademo-drawer-open');
    });
  });

if ($('#introvid-popup').length) {

    $('#introvid-popup').click(function () {
        var src = 'https://www.youtube.com/embed/U30Yx4H3ctM?wmode=transparent&rel=0&autoplay=1';
        $('#explainervideo-popup').modal('show');
        $('#explainervideo-popup iframe').attr('src', src);
    });

    // $('#explainervideo-popup button').click(function () {
    //     $('#explainervideo-popup iframe').removeAttr('src');
    // });
    $('#explainervideo-popup').on('hidden.bs.modal', function () {
      $('#explainervideo-popup iframe').removeAttr('src');
      });

    var scrollTrigger = 600, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
          //  console.log('scrolling ', $(window).scrollTop(), $(document).height());
            if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= ($(document).height() - 1000)) {
                $('#introvid-popup').addClass('show');
            } else {
                $('#introvid-popup').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });

}
// Video Popup
if ($('#introvid').length) {
    var scrollTrigger = 600, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
           // console.log('scrolling ', $(window).scrollTop(), $(document).height());
            if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= ($(document).height() - 1000)) {
                $('#introvid').addClass('show');
            } else {
                $('#introvid').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
}

$(".ani").inViewport(function(px){
    if(px) $(this).addClass("animated") ;
});


$('.shrinkable').readmore({ 
    speed: 75, 
    collapsedHeight: 195,
    lessLink: '<a href="#" class="c-feature__link">read less</a>',
    moreLink: '<a href="#" class="c-feature__link">read more</a>'
});
 
 /*--------------------------------
  Swap video with autoplay video
---------------------------------*/

function autoPlayVideo(vcode, width, height){
  "use strict";
  $("#videoContainer").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}
jQuery('a.introVid').click(function(){
  autoPlayVideo('U30Yx4H3ctM','850','483');
});
jQuery('a.introVid-fixed').click(function(){
  autoPlayVideo('U30Yx4H3ctM','850','483');
});



$(document).ready(function() {
  $("img[data-vimeo-id]").each(function(index) {
    var vimeoId = $(this).data('vimeo-id');
    // Endpoint: https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/
    $.getJSON('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + vimeoId, {
        format: "json",
        width: "640"
      },
      function(data) {
        $("img[data-vimeo-id=" + vimeoId + "]").attr('src', data.thumbnail_url);
      });
  }); 
});