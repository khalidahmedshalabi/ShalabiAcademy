function FixItemHeight()
{
    $(".item_year").height(($(window).height() - $(".header").height() - ($(window).height() * 0.4)));
}

FixItemHeight();

$(window).resize(function()
{
    FixItemHeight();
});

var SelectedYear = false;

$(".item_year").hover(

    function ()
    {
        if(SelectedYear == false)
        {
            var sound = document.getElementById("PageTurningSound");
            sound.currentTime = 0;
            sound.volume = 0.2;
            sound.play();

            $(this).find('img').stop().animate({height: "100%"}, {duration: 300, queue: false});

            $(this).find('p').css('display', 'none');
        }
    },
    function ()
    {
        if(SelectedYear == false)
        {
            var dis = $(this);
            dis.find('img').stop().animate({height: "60%"}, {duration: 800, queue: false, complete: function () {
                dis.find('p').css('display', 'inline');
            }});
        }
    }
);

$(".item_year").click(

    function ()
    {
        SelectedYear = true;
        $(this).find('img').css("height", "70%");
        $(this).removeClass('papers');
        $(this).removeClass('ruled_paper1');
        $(".item_year").not(this).fadeOut(990);
        $(".item_year").not(this).animate({width:"0%"}, {duration: 500, queue: false});
        $(this).animate({fontSize: "150%", width:"40%"}, {duration: 500, queue: false, complete: function () {
            $(".item_year").fadeOut(500, function() {
                location.href = "selection.html";
            });;
        }});
    }
);
