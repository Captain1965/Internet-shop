@@include('../../node_modules/jquery/dist/jquery.js');
@@include('../../node_modules/slick-carousel/slick/slick.js');
@@include('../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js');
@@include('../../node_modules/rateyo/src/jquery.rateyo.js');
@@include('../../node_modules/ion-rangeslider/js/ion.rangeSlider.js');
@@include('../../node_modules/jquery-form-styler/dist/jquery.formstyler.js');


$(function(){
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    arrows: false,
    asNavFor: '.product-slide__thumb',
    draggable: false,
    fade: true
  });

  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');    
    $(this).addClass('shop-content__filter-btn--active');
  });
  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
  });
$('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
  });


  $('.select-style, .product-one__num').styler();

$('.filter-price__input').ionRangeSlider({
  type: "double",
  prefix: "$", 
  onStart: function (data){
    $('.filter-prise__from').text(data.from);
    $('.filter-prise__to').text(data.to);
  },
  onChange: function (data) {
    $('.filter-prise__from').text(data.from);
    $('.filter-prise__to').text(data.to);
  },
});

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


function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
 //new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('promo__clock', deadline);

$('.select-style').styler();
})
