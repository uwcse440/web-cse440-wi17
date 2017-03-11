window.onbeforeunload = function() {window.scrollTo(0,0);}

$(document).ready(function() {
	
	$("#logo").click(function() {
		$('html,body').animate({
        scrollTop: $("#problem").offset().top},
        'slow');
	});

});