$(document).ready(function () {
    var btnMobile = $('.btn-menumobile');

    $(btnMobile).on('click', function () {
        $('.nav-container ul').toggleClass('open');
    });
});