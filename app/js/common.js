$(function() {
    $('#my-menu').mmenu({
        extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'], //это бургер
        navbar: {
            title: '<img src = "img/logo-1.svg" alt="Салон красоты Smitler">'
        },
        offCanvas: {
            position: 'right'
        }
    });
    //тут делаем кнопку - чтобы она кружилась
    var api = $('#my-menu').data('mmenu');
    api.bind('opened', function () {
        $('.hamburger').addClass('is-active');

    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active');
    });


    //карусель
    $('.carousel-services').owlCarousel({
        loop: true, //делает бесконечную карусель
        nav: true,//next prev
        smartSpeed: 700, //speed
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'], //fontawesome - иконка используется
        responsiveClass: true,
        responsive: {
            0: { //указываем количество отображаемых элементов на малых экранах
                items: 1
            },
            800: { // на разрешении в 800
                items: 2
            },
            1100: { // на разрешении в 1100
                items: 3
            }
        }
    });

    //делаем изображение в карусели - такой же высотой как и контентная композиция
    function carouselService() {
       $('.carousel-services-item').each(function () {
            var ths = $(this),
                thsh = ths.find('.carousel-services-content').outerHeight();
                ths.find('.carousel-services-image').css('min-height', thsh)

       });
    }carouselService();
});

