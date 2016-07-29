$(".gobackhomepage").click(function(event) {
    location.href = "index.html"
});

$(".gobackhomepage").slideDown(500);

$(".subject_element").click(function(event) {
    $("html, body").animate(
	{
		scrollTop: $(".section_show").offset().top
	});
});
