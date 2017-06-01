$(document).ready(function() {
    if ($('.main-menu .parent.active > .trigger > .glyphicon').hasClass('glyphicon-plus')) {
        $('.main-menu .parent.active > .trigger > .glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});

$(document).on('click', '.trigger', function(e) {
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().siblings().find('.glyphicon-minus').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    $(this).next('ul').slideToggle();
    var icon = $(this).children('.glyphicon');
    if (icon.hasClass('glyphicon-minus')) {
        icon.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        icon.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
