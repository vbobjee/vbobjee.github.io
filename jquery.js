$(document).ready(function () {
    $('.highlight').hover(function () {
        $(this).siblings('.build').show();
    },

    function () {
        $(this).siblings('.build').hide();
    });
    $('.build').hover(function () {
        $(this).show();
    },
    function () {
        $(this).hide();
    });
});
