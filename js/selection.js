$(".scrolltotop").click(function(e)
{
    $("html, body").animate(
	{
		scrollTop: 0
	}, 1000);
});

$(".app_logo").click(function(event) {
    location.href = "index.html";
});

var MenuButtonContainer = false;

function MenuButtonContainerDefault()
{
    $(".menu_button_container").velocity('finish', true);
    $(".menu_button_container").css('position', 'static');
    $(".menu_button_container").css('background-color', '#333333');
    $(".menu_button_container").css('color', '#DDDDDD');
    $(".menu_button_container").css('font-size', '350%');
    $(".menu_button_container").css("box-shadow", "none");
}

MenuButtonContainerDefault();

$(document).scroll(function(event) {
    if($(document).scrollTop() > $(".menu_button_container").height())
    {
        if(MenuButtonContainer == false)
        {
            MenuButtonContainer = true;
            $(".menu_button_container").css('display', 'none');
            $(".menu_button_container").css('background-color', 'rgba(255, 255, 255, 0.9)');
            $(".menu_button_container").css('color', '#333333');
            $(".menu_button_container").css('position', 'fixed');
            $(".menu_button_container").css('top', '-5%');
            $(".menu_button_container").velocity({top: "0%", fontSize:"300%"}, {duration: 700, queue: false});
            $(".menu_button_container").fadeIn('500');
            $(".menu_button_container").css("box-shadow", "0px 9px 20px -10px rgba(0,0,0,0.75)");
        }
    }
    else
    {
        if(MenuButtonContainer == true)
        {
            MenuButtonContainer = false;
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
        $(".actual_menu").velocity({left: "0%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeIn('500');
    }
});

$(".close_menu_button").click(function(event) {
    if(MenuShown == true)
    {
        $(".actual_menu").velocity({left: "-3%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeOut('500', function (){
            MenuShown = false;
            $(".menu").hide();
        });
    }
});

$(".menu_space").click(function(event) {
    if(MenuShown == true)
    {
        $(".actual_menu").velocity({left: "-3%"}, {duration: 300, queue: false});
        $(".actual_menu").fadeOut('500', function (){
            MenuShown = false;
            $(".menu").hide();
        });
    }
});
