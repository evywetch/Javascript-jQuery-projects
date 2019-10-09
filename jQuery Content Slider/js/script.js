// To be able for jquery to be able to grab the html element in that page, we have to use $(document).ready(function(){});
// It will make sure that everything and loaded first and then we can use jquery with it.
$(document).ready(function(){
	// set options
	var speed = 500; // the speed of transition to other image in milisecound
	var autoswitch = true; // auto slider options
	var autoswitch_speed = 4000  // auto slider speed

	// Add initial active class to the first slide div
	$('.slide').first().addClass('active');

	// Hide all slides
	$('.slide').hide();

	// Show first slide
	$('.active').show();

	// When click Next, show next foto
	$('#next').on('click', nextSlide);

	// When click Prev, show previous foto
	$('#prev').on('click', prevoiusSlide);

// Auto click
if(autoswitch == true) {
	setInterval(nextSlide, autoswitch_speed)
}

// Switch to next slide
function nextSlide() {
		// 1. remove class 'active' from the current foto, then add class 'oldActive' to it
		$('.active').removeClass('active').addClass('oldActive');
		// if 'oldActive' is the last slide, then we want to go back to the first
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else { 
			// if it's not the last child then we just go to the next one
			$('.oldActive').next().addClass('active');
		}

		// Remove all the 'oldActive' class
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		// Then we want to make sure that the 'active' class is the one that coming in
		$('.active').fadeIn(speed);
}

// Switch to previous slide
function prevoiusSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else { 
			
			$('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		
		$('.active').fadeIn(speed);
}

});