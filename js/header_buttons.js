var sliding_header_hide_timer = -1;

function HideAnySlidingHeader()
{
    clearTimeout(sliding_header_hide_timer);
    $(".sliding_header").css('display', 'none');
}

function AnimateSlidingHeaderContent(elem)
{
    $(elem).find(".sliding_header_content").css('display', 'none');
    $(elem).find(".sliding_header_content").slideDown(500);
}

$(".sliding_header").hover(function() {
    // none
}, function() {
    $(this).slideUp(300);
});

$(".header_button_aboutus").hover(function() {
    HideAnySlidingHeader();
    $(".sliding_header_aboutus").css("display", "block");
    AnimateSlidingHeaderContent(".sliding_header_aboutus");
}, function () {
    sliding_header_hide_timer = setTimeout(function () {
        if(!$(".sliding_header_aboutus:hover").length > 0)
        {
            //$(".sliding_header_aboutus").css("display", "none");
            $(".sliding_header_aboutus").slideUp(100);
        }
    }, 1000);
});

$(".header_button_howtouse").hover(function() {
    HideAnySlidingHeader();
    $(".sliding_header_howtouse").css("display", "block");
    AnimateSlidingHeaderContent(".sliding_header_howtouse");
}, function () {
    sliding_header_hide_timer = setTimeout(function () {
        if(!$(".sliding_header_howtouse:hover").length > 0)
        {
            //$(".sliding_header_howtouse").css("display", "none");
            $(".sliding_header_howtouse").slideUp(100);
        }
    }, 1000);
});

$(".header_button_bookstore").hover(function() {
    HideAnySlidingHeader();
    $(".sliding_header_bookstore").css("display", "block");
    AnimateSlidingHeaderContent(".sliding_header_bookstore");
}, function () {
    sliding_header_hide_timer = setTimeout(function () {
        if(!$(".sliding_header_bookstore:hover").length > 0)
        {
            //$(".sliding_header_bookstore").css("display", "none");
            $(".sliding_header_bookstore").slideUp(100);
        }
    }, 1000);
});

$(".header_button_contactus").hover(function() {
    HideAnySlidingHeader();
    $(".sliding_header_contactus").css("display", "block");
    AnimateSlidingHeaderContent(".sliding_header_contactus");
}, function () {
    sliding_header_hide_timer = setTimeout(function () {
        if(!$(".sliding_header_contactus:hover").length > 0)
        {
            //$(".sliding_header_contactus").css("display", "none");
            $(".sliding_header_contactus").slideUp(100);
        }
    }, 1000);
});
