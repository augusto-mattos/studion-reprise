/* $(document).ready(() => {
    const slick0ptions = {
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    };
    $(".slider").slick(slick0ptions)
    
  });

  $(document).ready(() => {
    const slick0ptions = {
        autoplay: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    };
    $(".slider__testemonials").slick(slick0ptions)
    
  });
  */

  $(document).ready(() => {
    //MENU
    $(".navbar__menu-btn").on("click", function () {
      $(".navbar__links").toggleClass("active");
      $(this).find('i').toggleClass('fa-bars');
      $(this).find('i').toggleClass('fa-times');
    })

    //CAROUSEL
    const slick0ptions = {
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    };
    $(".slider").slick(slick0ptions)
    
  });

  $(document).ready(() => {
    const slick0ptions = {
        autoplay: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
    };
    $(".slider__testemonials").slick(slick0ptions)
    
  });