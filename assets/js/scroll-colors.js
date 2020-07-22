$(function() {
    $(window).scroll(function () {
       if (window.innerWidth > 980) {
            if ($(this).scrollTop() < 300) {
                $('#header').removeClass()
                $('#header').addClass('color1')
            }
            if ($(this).scrollTop() > 300 && $(this).scrollTop() < 1000) {
                $('#header').removeClass()
                $('#header').addClass('color2')
            }
            if ($(this).scrollTop() > 1000) {
                $('#header').removeClass()
                $('#header').addClass('color3')
            }
       }
    });
 });