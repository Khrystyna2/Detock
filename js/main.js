$(document).ready(function () {

    $('.slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: '.slider__items'
    });

    $('.accordion>li>div').click(function () {
        $(this).find('span').toggleClass('rotate');
        $(this).next('article').slideToggle();
        $(this).closest('li').siblings('li').find('span').removeClass('rotate');
        $(this).closest('li').siblings('li').find('article').slideUp();
    });

});
