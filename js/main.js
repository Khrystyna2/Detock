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

    // POPUP video-open start

    var videoSrc;  
    $('.open-popup').click(function() {
        videoSrc = $(this).data( "src" );
    });

    $('.open-popup').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('.popup-video-open')
                    .css('display', 'block')
                    .animate({ opacity: 1, top: '50%' }, 200);
            });
        $("#video").attr('src',videoSrc + "?autoplay=1" ); 
    });
    $('.modal_close, #overlay').click(function () {
        $('.popup-video-open').animate({ opacity: 0, top: '45%' }, 200,
            function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
        $("#video").attr('src',videoSrc); 
    });
    // POPUP video-open end

    // scroll section
    let scrollLink = $('.scroll');
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

});
