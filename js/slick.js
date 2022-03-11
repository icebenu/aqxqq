$('.imprensa-content.multiple-items').slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-arrow--prev"></button>',
    nextArrow: '<button class="slick-arrow slick-arrow--next"></button>',
    dots: true,
    appendDots: document.querySelector('.slick-indicator'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 769,
            settings: {
                infinite: false,
                slidesToShow: 2,
                appendArrows: $('.slick-indicator')
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: false,
                slidesToShow: 1.155,
                centerMode: true,
                appendArrows: $('.slick-indicator')
            }
        },
        {
            breakpoint: 500,
            settings: {
                infinite: false,
                slidesToShow: 1.105,
                centerMode: true,
                appendArrows: $('.slick-indicator')
            }
        },
        {
            breakpoint: 460,
            settings: {
                infinite: false,
                slidesToShow: 1.005,
                centerMode: true,
                appendArrows: $('.slick-indicator')
            }
        },
        {
            breakpoint: 380,
            settings: {
                infinite: false,
                slidesToShow: 1.005,
                centerMode: true,
                appendArrows: $('.slick-indicator')
            }
        }
    ]
});
