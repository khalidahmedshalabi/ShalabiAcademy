var sliding_header_hide_timer = -1;

function ToggleWelcomeSectionContent(toggle)
{
    if(toggle)
    {
        $(".section_welcome_content").css('display', 'block');
    }
    else
    {
        $(".section_welcome_content").css('display', 'none');
    }
}

function HideAnySlidingHeader()
{
    clearTimeout(sliding_header_hide_timer);
    $(".sliding_header").css('display', 'none');
    ToggleWelcomeSectionContent(true);
}

function AnimateSlidingHeaderContent(elem)
{
    $(elem).find(".sliding_header_content").css('display', 'none');
    $(elem).find(".sliding_header_content").fadeIn(500);
}

$(".sliding_header_close").click(function(event) {
    HideAnySlidingHeader();
});

$(".sliding_header").hover(function() {
    // none
}, function() {
    $(this).fadeOut(300, function () {
        ToggleWelcomeSectionContent(true);
    });
});

$(".header_button_aboutus").hover(function() {
    HideAnySlidingHeader();
    $(".sliding_header_aboutus").css("display", "block");
    ToggleWelcomeSectionContent(false);
    AnimateSlidingHeaderContent(".sliding_header_aboutus");
}, function () {
    sliding_header_hide_timer = setTimeout(function () {
        if(!$(".sliding_header_aboutus:hover").length > 0)
        {
            $(".sliding_header_aboutus").fadeOut(100, function () {
                ToggleWelcomeSectionContent(true);
            });
        }
    }, 1000);
});

$(".header_button_howtouse").hover(function() {
    HideAnySlidingHeader();
    $(".sliding_header_howtouse").css("display", "block");
    ToggleWelcomeSectionContent(false);
    AnimateSlidingHeaderContent(".sliding_header_howtouse");
}, function () {
    sliding_header_hide_timer = setTimeout(function () {
        if(!$(".sliding_header_howtouse:hover").length > 0)
        {
            $(".sliding_header_howtouse").fadeOut(100, function () {
                ToggleWelcomeSectionContent(true);
            });
        }
    }, 1000);
});

$(".header_button_bookstore").hover(function() {
    HideAnySlidingHeader();
    $(".sliding_header_bookstore").css("display", "block");
    ToggleWelcomeSectionContent(false);
    AnimateSlidingHeaderContent(".sliding_header_bookstore");
}, function () {
    sliding_header_hide_timer = setTimeout(function () {
        if(!$(".sliding_header_bookstore:hover").length > 0)
        {
            $(".sliding_header_bookstore").fadeOut(100, function () {
                ToggleWelcomeSectionContent(true);
            });
        }
    }, 1000);
});

$(".header_button_contactus").hover(function() {
    HideAnySlidingHeader();
    $(".sliding_header_contactus").css("display", "block");
    ToggleWelcomeSectionContent(false);
    AnimateSlidingHeaderContent(".sliding_header_contactus");
}, function () {
    sliding_header_hide_timer = setTimeout(function () {
        if(!$(".sliding_header_contactus:hover").length > 0)
        {
            $(".sliding_header_contactus").fadeOut(100, function () {
                ToggleWelcomeSectionContent(true);
            });
        }
    }, 1000);
});
