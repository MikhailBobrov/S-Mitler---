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


    //инициализируем карусель - получаем данные о том, инициализирована она или нет. делаем это до объявления owlCarousel
    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService()
        }, 100)

    })
        //карусель
    $('.carousel-services').owlCarousel({
        loop: true, //делает бесконечную карусель
        nav: true,//next prev
        smartSpeed: 700, //speed
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'], //fontawesome - иконка используется
        responsiveClass: true,
        dots: false,
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

    //пишем функцию для последнего слова и первого - для carousel-services-item (сервис)
    $('.carousel-services-compositions .h3').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/,'<span>$1</span>'));
    });

    //сюда пишем все что подвергается изменению размера
    //resize window
    function onResize() {
        $('.carousel-services-content').equalHeights();
    }onResize();
    window.onresize = function () {
        onResize();
    }
});



