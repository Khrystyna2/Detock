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

    $('.btn-menu').click(function () {
        $('.nav-menu').toggleClass('open');
        $('.top-menu').fadeToggle();
    });

    // POPUP video-open start

    var videoSrc;
    $('.open-popup').click(function () {
        videoSrc = $(this).data("src");
    });

    $('.open-popup').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('.popup-video-open')
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '50%' }, 200);
            });
        $("#video").attr('src', videoSrc + "?autoplay=1");
    });
    $('.modal_close, #overlay').click(function () {
        $('.popup-video-open').animate({ opacity: 0, top: '45%' }, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
        $("#video").attr('src', videoSrc);
    });
    // POPUP video-open end

    // scroll section
    let scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    new WOW().init();

    //fixed menu
    let heightHeader = $('.header-fixed').height();
    $(window).scroll(function () {
        if ($(window).scrollTop() >= heightHeader) {
            $('.header-fixed').addClass('fixed');
            $('.header').css('padding-top', heightHeader);
        } else {
            $('.header-fixed').removeClass('fixed');
            $('.header').css('padding-top', "0");
        }
    });
    
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        $('.how-it-work__item').click(function () {
            $(this).toggleClass('hover');
            $(this).closest('.how-it-work__item').siblings('.how-it-work__item').removeClass('hover');
        });
        $('.cards-recipe__item').click(function () {
            $(this).toggleClass('hover');
            $(this).closest('.cards-recipe__item').siblings('.cards-recipe__item').removeClass('hover');
        });
    }

});
