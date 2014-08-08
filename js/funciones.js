

$(function() {
var fixadent = $("#menu"), pos = fixadent.offset();
var main = $(".ia-container");
$(window).scroll(function() {
if($(this).scrollTop() > (pos.top + 0) && fixadent.css('position') == 'static') 
	{ 
		fixadent.addClass('fixed'); 
		main.addClass('mainFixed');
	}
else if($(this).scrollTop() <= pos.top && fixadent.hasClass('fixed'))
	{ 
		fixadent.removeClass('fixed'); 
		main.removeClass('mainFixed');
	}
})
});


 
    
