$(document).ready(function () {

    $('.slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: '.slider__items',
        responsive: [
          {
            breakpoint: 580,
            settings: {
                arrows: false
            }
          }
        ]
    });

    $('.accordion>li>div').click(function () {
        $(this).find('span').toggleClass('rotate');
        $(this).next('article').slideToggle();
        $(this).closest('li').siblings('li').find('span').removeClass('rotate');
        $(this).closest('li').siblings('li').find('article').slideUp();
    });

    $('.btn-menu').click(function() {
        $('.nav-menu').toggleClass('open');
        $('.top-menu').fadeToggle();
    });

});
