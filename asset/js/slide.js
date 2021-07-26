$(document).ready(function(){
    var data = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true
    };
    $(".blog-slider").slick(data);
  });
  