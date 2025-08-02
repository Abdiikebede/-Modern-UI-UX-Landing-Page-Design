$(".wrapper__slider-testi").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: ".wrapper__arrows .left",
  nextArrow: ".wrapper__arrows .right",
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
