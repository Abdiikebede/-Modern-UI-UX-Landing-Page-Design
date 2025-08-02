$(".wrapper__slider-head").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  asNavFor: ".wrapper__slider-nav, .wrapper__slider-date",
});
$(".wrapper__slider-date").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  asNavFor: ".wrapper__slider-head, .wrapper__slider-nav",
});

$(".wrapper__slider-nav").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  dots: false,
  arrows: false,
  variableWidth: true,
  adaptiveHeight: true,
  autoplay: true,
  pauseOnHover: true,
  asNavFor: ".wrapper__slider-date, .wrapper__slider-head",
  responsive: [
    {
      breakpoint: 77,
      settings: {
        variableWidth: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".wrapper__slider-service").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  variableWidth: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        variableWidth: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 512,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".wrapper__slider-about").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: "",
  nextArrow: ".path__2",
});

$(".wrapper__slider-testi").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: ".wrapper__arrows-testi .left",
  nextArrow: ".wrapper__arrows-testi .right",
});

$("a[href^='#click-']").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    1000
  );
});
