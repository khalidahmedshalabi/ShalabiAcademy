var SideBarShown = false;

function FixSideBarHeight()
{
    if(!SideBarShown)
    {
        $(".side_bar").height($(".side_bar_title").height());
    }
}

$(".side_bar").hover(function() {

    SideBarShown = true;
    $(".side_bar").animate({height: "60%"}, {duration: 500, queue: false});
    $(".side_bar").getNiceScroll().hide();

    var sound = document.getElementById("OldDoorSound");
    sound.currentTime = 0;
    sound.volume = 0.4;
    sound.play();

}, function() {

    SideBarShown = false;
    $(".side_bar").animate({height: $(".side_bar_title").height()}, {duration: 500, queue: false});
    $(".side_bar").getNiceScroll().resize();
    $(".side_bar").getNiceScroll(0).doScrollTop(0, 300);

    var sound = document.getElementById("OldDoorSound");
    sound.pause();
    sound.currentTime = 0;

});

/*$(document).ready(function () {
    if($(window).scrollTop() >= $(".section_learning").offset().top)
    {
        $(".side_bar").css('display', 'block');
        FixSideBarHeight();
        setTimeout(FixSideBarHeight, 500);
    }
    else
    {
        $(".side_bar").css('display', 'none');
    }
});*/

$(window).resize(function()
{
    FixSideBarHeight();
});
/*
$(window).scroll(function(event) {
    if($(window).scrollTop() >= $(".section_learning").offset().top - 50)
    {
        $(".side_bar").css('display', 'block');
        FixSideBarHeight();
    }
    else
    {
        $(".side_bar").css('display', 'none');
    }
});*/
