let scrollTop = $(window).scrollTop();

$(window).scroll(function (evt) {
    scrollTop = $(this).scrollTop();
});

$(document).ready(function () {
    // фикс меню при скролле
    $(window).scroll(function() {
        if ((scrollTop > 80)) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

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
    $('body').on('click', '.anchor[href^="#"]', function () {
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
        Fancybox.show(
            [{src: id}],
            {
                defaultType: "inline", 
                // dragToClose: false,
                // touchMove: false,
                // backdropClick: false
            }
        );
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
        defaultType: "inline",
        // dragToClose: false,
        // touchMove: false,
        // backdropClick: false
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

    // попап отзывов
    $('body').on('click', '.review-open', function(e) {
        let img = $(this).find('.review-person-img img').attr('src');
        let name = $(this).find('.review-person-name').html();
        let status = $(this).find('.review-person-status').html();
        let text = $(this).find('.review-text').html();
        $('#modal_review_img img').attr('src', img);
        $('#modal_review_name').html(name);
        $('#modal_review_status').html(status);
        $('#modal_review_text').html(text);
    });

    // history-element scroll
    if($('.history-element').length) {
        $(window).on('scroll load', function () {
            let top = $(window).scrollTop();
            $('.history-element').each(function() {
                let destination = $(this).offset().top-400;
                if(top >= destination) {
                    $(this).addClass('scrolled');
                } else {
                    $(this).removeClass('scrolled');
                }
            });
        }).trigger('scroll');
    }

    // sliders
    const cards_slider = new Swiper('.cards-swiper-slider', {
        slidesPerView: 'auto',
        loop: false,
        freeMode: false,
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            1024: {
                spaceBetween: 16,
            },
        },
    });

    const trainings_slider = new Swiper('.trainings-slider', {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const travel_slider = new Swiper('.travel-slider', {
        slidesPerView: 'auto',
        loop: false,
        freeMode: false,
        spaceBetween: 8,     
        breakpoints: {
            1024: {
                spaceBetween: 16,
            },
        },
    });

    const travel_inner_slider = new Swiper('.travel-inner-slider', {
        slidesPerView: 'auto',
        loop: false,
        freeMode: false,
        spaceBetween: 8,  
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },     
        breakpoints: {
            1024: {
                spaceBetween: 16,
            },
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
        slidesPerView: 'auto',
        loop: true,
        direction: "horizontal",
        // effect: "fade",
        spaceBetween: 8,
        thumbs: {
            swiper: product_slider_navs,
        },
        breakpoints: {
            481: {
                direction: "vertical",
                spaceBetween: 16,
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
    function mobile_slider() {
        if (window.innerWidth <= 480) {
            if (!init && $('.mobile-swiper-slider').length) {
                init = true;
                swiper = new Swiper(".mobile-swiper-slider", {
                    slidesPerView: 'auto',
                    loop: true,
                    freeMode: false,
                    spaceBetween: 8,
                });
            }
        } else if (init && $('.mobile-swiper-slider').length) {
            swiper.destroy();
            init = false;
        }
    }
    mobile_slider();
    window.addEventListener("resize", mobile_slider);

    function services_list_slider() {
        if (window.innerWidth <= 480) {
            if (!init && $('.services-list-slider-mobile').length) {
                init = true;
                swiper = new Swiper(".services-list-slider-mobile", {
                    slidesPerView: 'auto',
                    loop: false,
                    freeMode: false,
                    spaceBetween: 8,
                });
            }
        } else if (init && $('.services-list-slider-mobile').length) {
            swiper.destroy();
            init = false;
        }
    }
    services_list_slider();
    window.addEventListener("resize", services_list_slider);

    // кнопки +-
    $('.btn-number').parents('.input-count-group').append('<div class="tooltip-input-count"></div>');
    $('body').on('click', '.btn-number', function(e) {
        var type = $(this).attr('data-type');
        var field = $(this).attr('data-field');
        var input = $(this).parent().find('input[name ='+field+']');
        var min = input.attr('min');
        var min_count = input.attr('min-count');
        var max = input.attr('max');
        min = parseInt(min);
        min_count = parseInt(min_count);
        max = parseInt(max);
        var currentVal;
        var value = input.val();
        if ($(this).parents('.product-have-offers').length == 0) {
            if (type == 'minus') {
                if (value > min) {
                    if (value <= min_count) {
                        currentVal = parseInt(value) - min_count;
                        input.val(currentVal).change();
                    } else {
                        currentVal = parseInt(value) - 1;
                        input.val(currentVal).change();
                    }
                }
            }
            if (type == 'plus') {
                if (value < max) {
                    if (value < min_count) {
                        currentVal = parseInt(value) + min_count;
                        input.val(currentVal).change();
                    } else {
                        currentVal = parseInt(value) + 1;
                        input.val(currentVal).change();
                    }
                }
            }
        }

        let tooltip = $(this).parents('.input-count-group').find('.tooltip-input-count');
        if ($(this).hasClass('btn-plus') && $(this).hasClass('disabled-btn')) {
            tooltip.addClass('show').text('Нельзя добавить больше товаров в заказ');
            setTimeout(function() {
                tooltip.removeClass('show');
            }, 2000);
        }
    });
    $('body').on('change keyup', '.input-number', function() {
        window.updateCartButtons(this);
    });

    window.updateCartButtons = function(item) {
        var min = $(item).attr('min');
        var max = $(item).attr('max');
        var val = $(item).val();
        var name = $(item).parent().find('.input-number').attr('name');
        if (val == min) {
            $(item).parent().find(".btn-number[data-type='minus'][data-field='" + name + "']").attr('disabled', 'true');
        } else $(item).parent().find(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled');
        if (val == max) {
            $(item).parent().find(".btn-number[data-type='plus'][data-field='" + name + "']").addClass('disabled-btn');
        } else $(item).parent().find(".btn-number[data-type='plus'][data-field='" + name + "']").removeClass('disabled-btn');
    }

    // скрытие полей сдэк
    if ($('.js-cdek-ch').length) {
        $('.js-cdek-ch').each(function() {
            if ($(this).is(':checked') && $(this).data('value') == 1) {
                if($('.js-cdek-field').is(':visible')) {
                    $('.js-cdek-field').hide();
                }
                if($('.js-cdek-field').is(':hidden')) {
                    $('.js-cdek-field').show();
                }
            }
        })
        $('body').on('change', '.js-cdek-ch', function(e) {
            if ($(this).is(':checked') && $(this).data('value') == 1) {
                $('.js-cdek-field').hide();
            } else {
                $('.js-cdek-field').show();
            }
        });
    }

    // parallax
    let parallax = document.querySelectorAll('.parallax');
    if(parallax.length) {
        new SimpleParallax(parallax, {
            delay: 0.5,
            orientation: 'down',
            scale: 1.2,
            // transition: 'linear'
        });
    }
});

// mousemove parallax
document.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".mouse-parallax-element").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}rem) translateY(${y}rem)`;
    });
}