$(document).ready(function(){
    var data = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      variableWidth: true,
      initialSlide:1
    };
    $(".blog-slider").slick(data);
  });
  