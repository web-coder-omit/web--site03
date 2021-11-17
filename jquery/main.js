(function($){
    'use  strict';
    //counterup plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $(".heaer-responsive").click(function(){
        $(".header-manue").slideToggle();
      });

      $(window).scroll(function(){
          var a = $(window).scrollTop();
          if(a>0){
              $('.header').addClass('sticky');
          }
          else{
            $('.header').removeClass('sticky');

          }
      });
      var a = $(window).width();
      $(window).resize(function(){
          if ( a > 991) {
              $('.header-manue').removeAttr('style');
          }
      });
      /* wow js*/
      var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animate__animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
      

}) (jQuery);