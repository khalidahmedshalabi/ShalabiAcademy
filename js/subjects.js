$(".subject_element").not(".subject_sample").not(".subject_unavailable").click(function(event) {
    $(".subject_element").not(this).not(".subject_unavailable").css('border-color', 'rgba(2, 158, 2, 0.7)');
    $(".subject_element").not(this).not(".subject_unavailable").css('background-color', 'rgba(2, 158, 2, 0.3)');
    $(".subject_element").not(this).not(".subject_unavailable").css('font-weight', 'rgba(2, 158, 2, 0.9)');
    $(this).not(".subject_unavailable").css('border-color', '#146942');
    $(this).not(".subject_unavailable").css('background-color', '#CCCCCC');
    $(this).not(".subject_unavailable").css('font-weight', 'bolder');

    $("html, body").animate(
	{
		scrollTop: $(".section_show").offset().top - $(".menu_button_container").height()
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
                $(".video_loader").html("<span class='loader_error arkufi'>لم يتم رفع هذا الفيديو بعد</span>");
                error ++;
            }
        }
    );

    $(".paper_loader").load(path + '/paper.txt',
        function(response, status, xhr)
        {
            if (status == "error")
            {
                $(".paper_loader").html("<span class='loader_error arkufi'>هذه الاوراق غير متوفرة حالياً</span>");
                error ++;
            }
        }
    );
}

function AvailableSubjectsCheckbox()
{
    if($(".subjects_checkbox").is(':checked'))
    {
        $(".subject_unavailable").not(".subject_sample").fadeOut(500);
    }
    else
    {
        $(".subject_unavailable").not(".subject_sample").fadeIn(500);
    }
}

AvailableSubjectsCheckbox();

$(".subjects_checkbox").click(function(event) {
    AvailableSubjectsCheckbox();
});

LoadLesson(0, 'sheet/year3/novel/chapter1');
