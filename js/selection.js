$(".scrolltotop").click(function(e)
{
    $("html, body").animate(
	{
		scrollTop: 0
	}, 1000);
});

var MenuButtonContainer = false;

function MenuButtonContainerDefault()
{
    $(".menu_button_container").stop();
    $(".menu_button_container").css('position', 'static');
    $(".menu_button_container").css('background-color', '#EEEEEE');
    $(".menu_button_container").css('color', '#333333');
    $(".menu_button_container").css('font-size', '350%');
    $(".menu_button_container").css("box-shadow", "none");
    $(".app_logo").css("width", "7%");
    MenuButtonContainerAnim = false;
    MenuButtonContainer = false;
}

MenuButtonContainerDefault();

var MenuButtonContainerHeight = $(".menu_button_container").height();

$(window).resize(function() {
    MenuButtonContainerHeight = $(".menu_button_container").height();
});


var MenuButtonContainerAnim = false;

$(document).scroll(function(event) {

    if($(document).scrollTop() > MenuButtonContainerHeight)
    {
        if(MenuButtonContainer == false && MenuButtonContainerAnim == false)
        {
            MenuButtonContainerAnim = true;
            $(".menu_button_container").css('background-color', 'rgba(255, 255, 255, 0.9)');
            $(".menu_button_container").css('color', '#333333');
            $(".menu_button_container").css('position', 'fixed');
            $(".menu_button_container").css('top', '-5%');
            $(".menu_button_container").animate({top: "0%", fontSize: "250%"}, {duration: 700, queue: false, complete: function () {
                MenuButtonContainerAnim = false;
            }});
            $(".menu_button_container").css("box-shadow", "0px 9px 20px -10px rgba(0,0,0,0.75)");
            $(".app_logo").css("width", "4%");
            MenuButtonContainer = true;
        }
    }
    else
    {
        if(MenuButtonContainer == true)
        {
            MenuButtonContainerDefault();
        }
    }
});

var MenuShown = false;

$(".menu_button").click(function(event) {
    if(MenuShown == false)
    {
        MenuShown = true;
        $(".menu").show();
        $(".actual_menu").css('left', '-3%');
        $(".actual_menu").animate({left: "0%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeIn('500');
    }
});

$(".close_menu_button").click(function(event) {
    if(MenuShown == true)
    {
        $(".actual_menu").animate({left: "-3%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeOut('500', function (){
            MenuShown = false;
            $(".menu").hide();
        });
    }
});

$(".menu_space").click(function(event) {
    if(MenuShown == true)
    {
        $(".actual_menu").animate({left: "-3%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeOut('500', function (){
            MenuShown = false;
            $(".menu").hide();
        });
    }
});
