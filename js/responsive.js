$(window).resize(function() {
    if($(window).width() > 768)
    {
        $(".header_button_container").css('display', 'block');
    }
    else
    {
        $(".header_button_container").css('display', 'none');
    }
});

$(".header_toggle").hover(function() {
    if($(window).width() <= 768)
        $(".header_button_container").slideDown(500);
}, function() {
    if($(window).width() <= 768)
        setTimeout(function () {
            if(!$(".header_button_container").is(':hover') && !$(".header_toggle").is(':hover'))
            {
                $(".header_button_container").slideUp(500);
            }
        }, 500);
});

$(".header_button_container").hover(function() {

}, function() {
    if($(window).width() <= 768)
        setTimeout(function () {
            if(!$(".header_button_container").is(':hover') && !$(".header_toggle").is(':hover'))
            {
                $(".header_button_container").slideUp(500);
            }
        }, 500);
});
