$(".wrapper__slider-head").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".wrapper__slider-say").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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

// $(document).ready(function () {
//   $(document).scroll(function () {
//     var scroll = $(this).scrollTop();
//     var topDist = $("#navbar__wrap").position();
//     if (scroll > topDist.top) {
//       $("#navbar__wrap").addClass('fixed-nav');
//     } else {
//       $("#navbar__wrap").removeClass('fixed-nav');
//     }
//   });
// });
