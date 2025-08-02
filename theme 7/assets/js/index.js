$(".wrapper__slider-about").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  prevArrow:"",
  nextArrow:'.wrapper__arrow-about',
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
});

$(".wrapper__slider-property").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: true,
  prevArrow:".wrapper__arrow-propery .left",
  nextArrow:'.wrapper__arrow-propery .right',
  infinite: true,
});

$(".wrapper__slider-testi").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});


$(".wrapper__select-filter").niceSelect();

$("a[href^='#click-']").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    1000
    );
  });
  

  
var menu = $("#section-head");

$(document).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $("#navbar__wrap").addClass("active");
  } else {
    $("#navbar__wrap").removeClass("active");
  }
});
