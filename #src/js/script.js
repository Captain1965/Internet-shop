@@include('../../node_modules/jquery/dist/jquery.js');
@@include('../../node_modules/slick-carousel/slick/slick.js');
@@include('../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js');

$(function(){
$('.top-slider__inner').slick({
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
})

