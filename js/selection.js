$(".gobackhomepage").click(function(event) {
    location.href = "index.html"
});

$(".gobackhomepage").slideDown(500);

$(".subject_element").click(function(event) {
    $(".subject_element").not(this).css('border-color', '#EEEEEE');
    $(".subject_element").not(this).css('background-color', '#EEEEEE');
    $(this).css('border-color', '#AAAAAA');
    $(this).css('background-color', '#AAAAAA');

    $("html, body").animate(
	{
		scrollTop: $(".section_show").offset().top
	});
});

function LoadLesson(path)
{
    $(".video_loader").load(path + '/video.txt',
        function(response, status, xhr)
        {
            if (status == "error")
            {
                $(".video_loader").html("<span class='loader_error'>Video is not available at the moment</span>");
            }
        }
    );

    $(".paper_loader").load(path + '/paper.txt',
        function(response, status, xhr)
        {
            if (status == "error")
            {
                $(".paper_loader").html("<span class='loader_error'>PDF is not available at the moment</span>");
            }
        }
    );
}
