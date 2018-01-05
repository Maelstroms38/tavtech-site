$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').removeClass('transparent');
  } else {
    $('nav').addClass('transparent');
  }
});