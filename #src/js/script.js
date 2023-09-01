@@include('../../node_modules/jquery/dist/jquery.js');
@@include('../../node_modules/slick-carousel/slick/slick.js');
@@include('../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js');
@@include('../../node_modules/rateyo/src/jquery.rateyo.js')

$(function(){
$('.top-slider__inner').slick({
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
 $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });
})
