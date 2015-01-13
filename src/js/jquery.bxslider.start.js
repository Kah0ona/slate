jQuery(document).ready(function($) {
  $('.Slider').bxSlider({
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 1,
    startSlide: 1,
    //slideWidth: 1200,
    slideMargin: 0,
    // captions: true,
    pause: 4000,
    auto: true,
    speed: 500,
    infiniteLoop: true,
    hideControlOnEnd: true,
    touchEnabled: false,
    pager: true,
    controls: true,
    onSliderLoad: function() {
      $('.Slider').css('visibility', 'visible');
    }
  });
});
