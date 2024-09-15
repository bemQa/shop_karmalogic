let scrollTop = $(window).scrollTop();

$(window).scroll(function (evt) {
    scrollTop = $(this).scrollTop();
});

$(document).ready(function () {
    // анимация меню
    $('.menu').click(function (e) {
        e.preventDefault();
        (this.classList.contains('active') === true) ? this.classList.remove('active'): this.classList.add('active');

        $('.header').toggleClass('active');
        $('body').on('click', function (e) {
            let div = $('.menu-links-wrapper, .menu');

            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.header, .menu').removeClass('active');
            }
        });
    });

    // якоря для ссылок
    $('.anchor[href^="#"]').click(function () {
        $('.header').removeClass('active');
        $('.menu').removeClass('active');

        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top - 150;
        $('html, body').animate({
            scrollTop: destination
        }, 500, 'swing');
        return false;
    });

    // аккордеон
    function openAccordion() {
        let wrap = $('.accordion-wrap');
        let accordion = wrap.find('.accordion-title');

        accordion.on('click', function () {
            let $this = $(this);
            let $parent = $(this).parent();
            let content = $this.next();

            if (content.is(':visible')) {
                $this.removeClass('active');
                $parent.removeClass('active');
                content.slideUp('fast');
            } else {
                $this.addClass('active');
                $parent.addClass('active');
                content.slideDown('fast');
            }

        });
    }
    openAccordion();

    // открытие модалок
    $('body').on('click','.js-open-modal', function(e){
        e.preventDefault();
        let id = $(this).attr('href');
        $.fancybox.open({
            src: id,
            type: 'inline'
        });
    });

    // маски
    if ($('.phone-mask').length) {
        $('.phone-mask').inputmask({
            mask: "+79999999999",
            "clearIncomplete": true
        });
    }

    // select2
    if($('.select').length > 1) {
        $('select').each(function() {
            let $this = $(this).not('.select-search');
            let parent = $(this).not('.select-search').parents('.select');
            $this.select2({
                minimumResultsForSearch: Infinity,
                dropdownParent: parent
            });
        });
        $('.select-search').each(function() {
            let $this = $(this);
            let parent = $(this).parents('.select');
            $this.select2({
                dropdownParent: parent
            });
        });
    } else if($('.select').length == 1) {
        $('select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('.select')
        });
        $('.select-search').select2({
            dropdownParent: $('.select')
        });
    }

    // sliders
    const courses_cards = new Swiper('.courses-cards', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
        // mousewheel: true,
        // breakpoints: {
        //     480: {
        //         slidesPerView: 1,
        //     },
        // },
    });

    const trainings_slider = new Swiper('.trainings-slider', {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const shop_slider = new Swiper('.shop-slider', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
    });

    const travel_slider = new Swiper('.travel-slider', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
    });

    // only mobile sliders
    let init = false;
    let swiper;
    function travel_page_slider() {
        if (window.innerWidth <= 480) {
            if (!init && $('.travel-page-slider').length) {
                init = true;
                swiper = new Swiper(".travel-page-slider", {
                    slidesPerView: 'auto',
                    loop: true,
                    freeMode: true,
                });
            }
        } else if (init && $('.travel-page-slider').length) {
            swiper.destroy();
            init = false;
        }
    }
    travel_page_slider();
    window.addEventListener("resize", travel_page_slider);
    
    function courses_page_cards() {
        if (window.innerWidth <= 480) {
            if (!init && $('.courses-page-cards').length) {
                init = true;
                swiper = new Swiper(".courses-page-cards", {
                    slidesPerView: 'auto',
                    loop: true,
                    freeMode: true,
                });
            }
        } else if (init && $('.courses-page-cards').length) {
            swiper.destroy();
            init = false;
        }
    }
    courses_page_cards();
    window.addEventListener("resize", courses_page_cards);
});