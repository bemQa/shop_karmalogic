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

    // fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // навигационное меню на текстовых страницах
    $(window).on('scroll load', function () {
        let top = $(window).scrollTop();
        $('.anchor-block').each(function() {
            let destination = $(this).offset().top - 250;
            if(top >= destination) {
                let id = $(this).attr('id');
                $('.text-block-nav-link.anchor[href^="#"]').removeClass('active');
                $('.text-block-nav-link.anchor[href^="#'+ id +'"]').addClass('active');
            }
        });
    }).trigger('scroll');
    if ((window.location.hash !== '' && window.location.hash !== '#!') && $('.text-block-nav-menu').length) {
        setTimeout(function() {
            let goto = $(window.location.hash).offset().top;
            $('html, body').animate({ scrollTop: goto }, 600, 'swing');
        }, 100);
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

    const shop_inner_slider = new Swiper('.shop-inner-slider', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: false,
        mousewheel: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 'auto',
                loop: true,
                freeMode: false,
            },
            481: {
                slidesPerView: 5,
                loop: false,
                freeMode: true,
            }
        },
    });

    const travel_slider = new Swiper('.travel-slider', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
    });

    const news_slider = new Swiper('.news-slider', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: false,
        mousewheel: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 'auto',
                loop: true,
                freeMode: false,
            },
            481: {
                slidesPerView: 3,
                loop: false,
                freeMode: true,
            }
        },
    });

    const experts_slider = new Swiper('.experts-slider', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: false,
        mousewheel: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 'auto',
                loop: true,
                freeMode: false,
            },
            481: {
                slidesPerView: 4,
                loop: false,
                freeMode: true,
            }
        },
    });

    const services_slider = new Swiper('.services-slider', {
        slidesPerView: 'auto',
        loop: true,
        freeMode: false,
        mousewheel: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 'auto',
                loop: true,
                freeMode: false,
            },
            481: {
                slidesPerView: 2,
                loop: false,
                freeMode: true,
            }
        },
    });

    const product_slider_navs = new Swiper(".product-slider-navs", {
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        grabCursor: true,
    });
    const product_slider = new Swiper(".product-slider", {
        // slidesPerView: 1,
        loop: true,
        // direction: "vertical",
        thumbs: {
            swiper: product_slider_navs,
        },
        breakpoints: {
            480: {
                slidesPerView: 'auto',
            },
        },
    });

    const text_page_slider = new Swiper('.text-page-slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
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

    function services_list_slider() {
        if (window.innerWidth <= 480) {
            if (!init && $('.services-list-slider-mobile').length) {
                init = true;
                swiper = new Swiper(".services-list-slider-mobile", {
                    slidesPerView: 'auto',
                    loop: true,
                    freeMode: false,
                });
            }
        } else if (init && $('.services-list-slider-mobile').length) {
            swiper.destroy();
            init = false;
        }
    }
    services_list_slider();
    window.addEventListener("resize", services_list_slider);

    function photo_gallery_slider() {
        if (window.innerWidth <= 480) {
            if (!init && $('.photo-gallery-slider').length) {
                init = true;
                swiper = new Swiper(".photo-gallery-slider", {
                    slidesPerView: 'auto',
                    loop: true,
                    freeMode: false,
                });
            }
        } else if (init && $('.photo-gallery-slider').length) {
            swiper.destroy();
            init = false;
        }
    }
    photo_gallery_slider();
    window.addEventListener("resize", photo_gallery_slider);
});