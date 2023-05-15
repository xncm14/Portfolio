
$(document).ready(function () {
        $('.slider').bxSlider({
            auto: true,
            pause: 3000,
            controls: false,
            pager: false,
        });
    });

 
    $(document).ready(function () {
        $('.main_menu').bxSlider({
            auto: true,
            pause: 3000,
            pager: false,
            pause: 3000,
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 1,
            slideWidth: 220,
            slideMargin: 173,
        });
    });

    $(function(){
    AOS.init();
    });

    $(document).ready(function(){
      $(window).on("scroll",function(){
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if(sctop > 3800) {
          $(".search01").removeClass("on1");
        }
    });
  });

  $(function(){
    AOS.init();
    });

    $(document).ready(function(){
      $(window).on("scroll",function(){
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if(sctop > 3800) {
          $(".search02").removeClass("on2");

        }
      });
    });
