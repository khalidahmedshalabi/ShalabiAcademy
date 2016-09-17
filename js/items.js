function FixItemHeight()
{
    $(".item_year").height(($(window).height() - $(".header").height() - ($(window).height() * 0.4)));
}

FixItemHeight();

$(window).resize(function()
{
    FixItemHeight();
});

$(".item_year").not(".disabled_year_item").hover(

    function ()
    {
        var sound = document.getElementById("PageTurningSound");
        sound.currentTime = 0;
        sound.volume = 0.2;
        sound.play();

        $(this).find('img').stop().animate({height: "100%"}, {duration: 300, queue: false});

        $(this).find('p').css('display', 'none');
    },
    function ()
    {
        var dis = $(this);
        dis.find('img').stop().animate({height: "60%"}, {duration: 800, queue: false, complete: function () {
            dis.find('p').css('display', 'inline');
        }});
    }
);

$(".disabled_year_item").hover(function(e) {
    $(".disabled_year_item_errorbox").css('left', e.pageX);
    $(".disabled_year_item_errorbox").css('top', e.pageY);
    $(".disabled_year_item_errorbox").show();
}, function() {
    $(".disabled_year_item_errorbox").hide();
});

$(".disabled_year_item").click(function(e) {
    $(".disabled_year_item_errorbox").css('left', e.pageX);
    $(".disabled_year_item_errorbox").css('top', e.pageY);
    $(".disabled_year_item_errorbox").show();
});
