/* some fancies on scrolling */

// change welcome section (top section) darkness (alpha) on scrolling
$(window).scroll(function(event)
{
    var newHeight = 100 - (($(window).scrollTop() / $(window).height()) * 100);

    if(newHeight > 0)
    {
        $(".section_welcome").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0," + (1 - (newHeight / 100)) + ")");
    }
});
