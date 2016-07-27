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

            $(this).find('img').animate({height: "70%"}, {duration: 300, queue: false});

            /*$(this).append('<p id="__temp"><br><br><br>Test</p>');
            $("#__temp").css("font-size", "130%");
            $("#__temp").css("text-align", "center");*/
        }
    },
    function ()
    {
        if(SelectedYear == false)
        {
            $(this).find('img').animate({height: "60%"}, {duration: 800, queue: false});

            //$("#__temp").remove();
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
