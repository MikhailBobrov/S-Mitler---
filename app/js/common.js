$(function() {
    $('#my-menu').mmenu({
        extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
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
});
