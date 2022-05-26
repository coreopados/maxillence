$(document).ready(function () {

    var swiper = new Swiper('.swiper-container-table', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },

    });


    if ($('.button-tab').hasClass('button-tab-first')) {
        $('.first-tab-content').addClass('show')
    } else if ($('.button-tab').hasClass('button-tab-second')) {
        $('.second-tab-content').addClass('show')
    }



    $('.button-tab').on('click', function () {
        $('.button-tab').removeClass('active')
        $('.first-tab-content, .second-tab-content').removeClass('show')
        $(this).addClass('active')
        if ($(this).hasClass('button-tab-first')) {
            $('.first-tab-content').addClass('show')
        } else if ($(this).hasClass('button-tab-second')) {
            $('.second-tab-content').addClass('show')
            $('.effect').addClass('hide')
        }
    })

    $('.contact-us').on('click', function () {
        event.preventDefault();
        $('.layer, .popup-form').addClass('show');
    })

    $('.close-popup, .layer, .close-button').on('click', function () {
        event.preventDefault();
        $('.layer, .popup').removeClass('show');
    })


    var checker = false;
    var context = $('.screen-2 .wrap-partners');
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    function initSlider() {
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    }

    function desroySlider() {
        swiper.destroy()
    }


    if (innerWidth < 767 && checker === false) {

        checker = true

        while (context.children('a:not(.swiper-slide)').length) {
            context.children('a:not(.swiper-slide):lt(8)').wrapAll('<a class="swiper-slide">');
        }
        context.addClass('swiper-container')
        context.children().wrapAll('<div class="swiper-wrapper">');

        initSlider()

    }

    $(window).on('resize', function () {
        if (innerWidth < 767 && checker === false) {
            checker = true
            console.log(checker)

            while (context.children('a:not(.swiper-slide)').length) {
                context.children('a:not(.swiper-slide):lt(8)').wrapAll('<a class="swiper-slide">');
            }
            context.addClass('swiper-container')
            context.children().wrapAll('<div class="swiper-wrapper">');
            $('.swiper-pagination').css('visibility', 'visible')
            initSlider()
        } else if (innerWidth > 767 && checker === true) {
            checker = false

            context.children().children().unwrap();
            context.children().children().unwrap();
            $('.swiper-pagination').css('visibility', 'hidden')

            context.removeClass('swiper-container')
            desroySlider()
        }
    })





    let widthR = $('footer .contacts-wrap').innerWidth()
    if (innerWidth < 991 && innerWidth > 767) {
        $('.copyright').css('right', widthR - 30 + "px")
    }
    if (pageYOffset > 95) {
        $('header').addClass('white')
    } else {
        $('header').removeClass('white')
    }

});

$(window).on('resize', function () {
    widthR = $('footer .contacts-wrap ').innerWidth()

    if (innerWidth < 991 && innerWidth > 767) {
        $('.copyright').css('right', widthR - 30 + "px")
    }
})




var offsetHeader;
$(window).on('scroll', function () {
    offsetHeader = pageYOffset

    if (offsetHeader > 95) {
        $('header').addClass('white')
    } else {
        $('header').removeClass('white')
    }
})

document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, false);
