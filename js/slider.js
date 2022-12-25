export const sliderFirst = function () {
  $(".my-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: false,
  });
};

export const sliderSecond = function () {
  $(".programm_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: true,
  });
};
