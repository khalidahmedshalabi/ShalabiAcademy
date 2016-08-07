function ShouldShowScrollToTop()
{
	if($(window).scrollTop() >= $(".section_singlefeature").offset().top - 200)
	{
		$(".scrolltotop").css('display', 'block');
	}
	else
	{
		$(".scrolltotop").css('display', 'none');
	}
}

$(document).ready(function () {
    ShouldShowScrollToTop();
});

$(window).scroll(function(event) {
    ShouldShowScrollToTop();
});

$(".scrolltotop").click(function(e)
{
	$("html, body").animate(
	{
		scrollTop: 0
	}, 1000);
});

$(".logo").fadeIn(2000);

$(".StartLearningButton").click(function(e)
{
	$("html, body").animate(
	{
		scrollTop: $(".section_learning").offset().top
	});
});

$(".StartLearningButton").hover(function() {
	$(".section_welcome").animate({backgroundSize: "105%"}, {duration: 500, queue: false});
	$(".section_welcome").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,0.7)");
}, function() {
	$(".section_welcome").animate({backgroundSize: "100%"}, {duration: 500, queue: false});
	$(".section_welcome").css("box-shadow", "none");
});

$(".start_learning_coffee").css('display', 'none');
setInterval(function () {
	$(".start_learning_coffee").fadeOut(1000, function() {
			$(".start_learning_coffee").fadeIn(1000);
		});
}, 1000);

var banner_title_ct = 0;

function ChangeBannerTitle()
{
    switch(banner_title_ct)
    {
        case 0:
        {
            $(".banner_title").html("An online school is definitely easier to access");
            break;
        }
        case 1:
        {
            $(".banner_title").html("Your way to success in Thanawya Amma");
            break;
        }
        case 2:
        {
            $(".banner_title").html("Learning has never been easier");
            break;
        }
        case 3:
        {
            $(".banner_title").html("Innovative methods to master Thanawya Amma");
            break;
        }
		case 4:
        {
            $(".banner_title").html("Qualifiied yet free education and always will be");
			banner_title_ct = -1;
            break;
        }
    }
    banner_title_ct ++;
}

$(".banner_title").ready(function () {
    setInterval(function ()
    {
        $(".banner_title").fadeOut(500, function() {
            ChangeBannerTitle();
            $(".banner_title").fadeIn(500);
        });
    }, 3000);
});

$(".moving_section").hover(function() {
	$(this).animate({fontSize: "+=3%"}, {duration: 500, queue: false});
}, function() {
	$(this).animate({fontSize: "100%"}, {duration: 500, queue: false});
});
