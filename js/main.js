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
	}, 1500);
});

$(".logo").fadeIn(2000);

$(".StartLearningButton").click(function(e)
{
	$("html, body").animate(
	{
		scrollTop: $(".section_learning").offset().top
	}, 1500);
});

$(".section_welcome").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,0.3)");

$(".StartLearningButton").hover(function() {
	$(".section_welcome").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,0.7)");
	$(".banner_title").css('background-color', 'rgba(255, 255, 255, 0.3)');
}, function() {
	$(".section_welcome").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,0.3)");
	$(".banner_title").css('background-color', 'rgba(0, 0, 0, 0.2)');
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
            $(".banner_title").html("الجيل الجديد من التعليم");
            break;
        }
		case 1:
        {
            $(".banner_title").html("شرح و مذكرات و خرائط ذهنية و اختبارات");
            break;
        }
		case 2:
        {
            $(".banner_title").html("اختبر نفسك اونلاين و احصل على تقييم فورياً");
            break;
        }
		case 3:
        {
            $(".banner_title").html("الكورس يشمل كل شىء من قواعد اللغة الى كل المهارات اللغوية");
            break;
        }
        case 4:
        {
            $(".banner_title").html("الطريق للتفوق فى الثانوية العامة");
            break;
        }
        case 5:
        {
            $(".banner_title").html("طرق مُبتكرة للتعليم باستخدام التكنولوجيا");
            break;
        }
		case 6:
        {
            $(".banner_title").html("جودة ممتازة بدون اى تكاليف");
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
	$(this).velocity({fontSize: "+=3%"}, {duration: 500, queue: false});
}, function() {
	$(this).velocity({fontSize: "100%"}, {duration: 500, queue: false});
});
