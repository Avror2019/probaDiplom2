$(function () {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true,
        
    });
  
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: 3000,
        arrows: true,
      });
})

