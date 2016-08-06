/* some fancies on scrolling */

var blurIntensity = 0;

// change welcome section (top section) height on scrolling
$(window).scroll(function(event)
{
    var newHeight = 100 - (($(window).scrollTop() / $(window).height()) * 100);

    if(newHeight > 70)
    {
        $(".section_welcome").height(newHeight + '%');

        if(newHeight > 80)
        {
            if(blurIntensity != 0)
            {
                $('.section_welcome').css(
                    {
                       'filter'         : 'blur(0px)',
                       '-webkit-filter' : 'blur(0px)',
                       '-moz-filter'    : 'blur(0px)',
                       '-o-filter'      : 'blur(0px)',
                       '-ms-filter'     : 'blur(0px)'
                    }
                );
            }
        }
        else
        {
            blurIntensity = (100 - newHeight) / 10;
            $('.section_welcome').css(
                {
                   'filter'         : 'blur('+ blurIntensity +'px)',
                   '-webkit-filter' : 'blur('+ blurIntensity +'px)',
                   '-moz-filter'    : 'blur('+ blurIntensity +'px)',
                   '-o-filter'      : 'blur('+ blurIntensity +'px)',
                   '-ms-filter'     : 'blur('+ blurIntensity +'px)'
                }
            );
        }
    }
});
