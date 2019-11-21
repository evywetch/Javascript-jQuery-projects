// Accordian
var action = "click";
var speed = "500";


$(document).ready(function(){
	// If click on the question, the next element(answer) will be toggled slide up or down
	$('li.q').on(action, function(){
		$(this).next()
			.slideToggle(speed)
			// when user click to this question, other answers that are still opened, will be slided up
			.siblings('li.a')
			.slideUp(speed);

			// Get image for active question
			var img = $(this).children('img');
			// Remove the "rotate" class for all images except the active
			$('img').not(img).removeClass('rotate');

			// Toggle rotate class
			img.toggleClass('rotate');
	});

});