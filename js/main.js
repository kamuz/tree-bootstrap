$(document).ready(function() {
    if ($('.main-menu .parent.active').length == 0) { $('.main-menu .parent:first >.trigger').click(); } });
$(document).on('click touchend', '.trigger a', function(e) { document.location = $(this).prop('href');
    return false;
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
