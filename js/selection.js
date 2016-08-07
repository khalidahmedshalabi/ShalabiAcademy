
$(".subject_element").not(".sample_subject").click(function(event) {
    $(".subject_element").not(this).not(".subject_unavailable").css('border-color', '#DDDDDD');
    $(".subject_element").not(this).not(".subject_unavailable").css('background-color', '#DDDDDD');
    $(".subject_element").not(this).not(".subject_unavailable").css('font-weight', 'normal');
    $(this).not(".subject_unavailable").css('border-color', '#146942');
    $(this).not(".subject_unavailable").css('background-color', '#CCCCCC');
    $(this).not(".subject_unavailable").css('font-weight', 'bolder');

    $("html, body").animate(
	{
		scrollTop: $(".section_show").offset().top
	});
});

function LoadLesson(clickedfrom, path)
{
    var error = 0;
    $(".video_loader").load(path + '/video.txt',
        function(response, status, xhr)
        {
            if (status == "error")
            {
                $(".video_loader").html("<span class='loader_error'>Video is not available at the moment</span>");
                error ++;
            }
        }
    );

    $(".paper_loader").load(path + '/paper.txt',
        function(response, status, xhr)
        {
            if (status == "error")
            {
                $(".paper_loader").html("<span class='loader_error'>PDF is not available at the moment</span>");
                error ++;
            }
        }
    );
}

var MenuShown = false;

$(".menu_button").click(function(event) {
    if(MenuShown == false)
    {
        MenuShown = true;
        $(".menu").css('left', '-3%');
        $(".menu").animate({left: "3%"}, {duration: 700, queue: false});
        $(".menu").fadeIn('500');
    }
});

$(".close_menu_button").click(function(event) {
    if(MenuShown == true)
    {
        MenuShown = false;
        $(".menu").fadeOut('500');
    }
});
