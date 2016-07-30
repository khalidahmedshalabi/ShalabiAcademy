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
