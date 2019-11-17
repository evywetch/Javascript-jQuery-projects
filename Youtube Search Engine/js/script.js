// Searchbar Handler

$(function() {
	var searchField = $("#query");
	var  icon = $("#search-btn");

	// Focus Event Handler, will extend when u type in the search box
	$(searchField).on('focus', function(){
		$(this).animate({
			width:'100%'
		},400);
		$(icon).animate({
			right:'10px'
		},400);
	});

	// Blur Event Handler, will shrink when there is no typing in the search box
	$(searchField).on('blur', function(){
		if(searchField.val() == ''){
			$(searchField).animate({
				width: '45%'
			},400, function(){});
			$(icon).animate({
				right:'360px'
			},400, function(){});
		}
		
	});

// We want to stop the default behevior when submitting the form, so it doesn't submit
	$('#search-form').submit(function(e){  // "e" is the Event object
		// this will prevent the default behevior of the form
		e.preventDefault();
	})

});

// this method will be called when u click search icon or enter, it's called from the form
function search(){
	// Clear results
	$('#results').html('');
	$('#buttons').html('');

	// Get form input
	q = $('#query').val();   // if don't use keyword "var" means it's a global varaible
 
	// Run get request on API

	$.get(
		// This is the URL of GET method, Can get this URL from https://developers.google.com/docs/search/list
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			type: 'video',
			/* To get this key, go to https://console.developers.google.com !!!! Make sure to get the right key, otherwise it won't work 
				and may get the exception in the console like :

				"jquery-3.4.1.min.js:2 GET https://www.googleapis.com/youtube/v3/search?part=snippet%2C%20id&q=web%20design&type=video&key=AIzaSyAtWw029BEXs7g3KlteR5TfK6kxZgTJOx8 403"
			*/
			key: 'AIzaSyACKbKyRh_k9W1Ia6VxfFHIVxz4DCAPKBw'}, 
			// "data" varaible will be getting from get request above
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				console.log(data);

// We will loop through all the video items that we get from the query
				$.each(data.items, function(i,item){
					// create html for each item
					var output = getOutput(item);

					// append each item to #results
					$('#results').append(output);

				});
				var buttons = getButtons(prevPageToken, nextPageToken);
				// Display buttons

				$('#buttons').append(buttons);
			}

		);
}

function nextPage(){

// .data('token') will grab the token from attribute data-token
// U dont have to do .data('data-token'), only do .data('token') it will understand as data-token
	var token = $('#next-button').data('token');
	var q = $('#next-button').data('query');
	// Clear results
	$('#results').html('');
	$('#buttons').html('');

	// Get form input
	q = $('#query').val();   
 
	// Run get request on API

	$.get(
		
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			type: 'video',
			// add additional option here
			pageToken: token,
			
			key: 'AIzaSyACKbKyRh_k9W1Ia6VxfFHIVxz4DCAPKBw'}, 
			
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				console.log(data);


				$.each(data.items, function(i,item){
					
					var output = getOutput(item);

					
					$('#results').append(output);

				});
				var buttons = getButtons(prevPageToken, nextPageToken);
				
				$('#buttons').append(buttons);
			}

		);
}

function prevPage(){

// .data('token') will grab the token from attribute data-token
// U dont have to do .data('data-token'), only do .data('token') it will understand as data-token
	var token = $('#prev-button').data('token');
	var q = $('#prev-button').data('query');
	// Clear results
	$('#results').html('');
	$('#buttons').html('');

	// Get form input
	q = $('#query').val();   
 
	// Run get request on API

	$.get(
		
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			type: 'video',
			// add additional option here
			pageToken: token,
			
			key: 'AIzaSyACKbKyRh_k9W1Ia6VxfFHIVxz4DCAPKBw'}, 
			
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				console.log(data);


				$.each(data.items, function(i,item){
					
					var output = getOutput(item);

					
					$('#results').append(output);

				});
				var buttons = getButtons(prevPageToken, nextPageToken);
				
				$('#buttons').append(buttons);
			}

		);
}
// Build Output
function getOutput(item){
	var videoId = item.id.videoId;  // ID is in id part
	var title = item.snippet.title;  // title is in snippet part
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;  // it will give a high quality thumbnail
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;

	// Build output string
	var output = '<li>' + 
	'<div class="list-left">' + 
	'<img src="' +thumb+ '">' +
	'</div>' +
	'<div class="list-right">' +
	'<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">'+title+'</a></h3>' +
	'<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
	'<p>'+description+'</p>' +
	'</div>' +
	'</li>' +
	'<div class="clearfix"></div>' +  // add the clearfix so we can clear any float
	'';
return output;
}

// Build the buttons
function getButtons(prevPageToken, nextPageToken){
	if(!prevPageToken){
		var btnoutput = '<div class="button-container">' +
						'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="' + q + '"' +
						'onclick="nextPage();">Next Page</button></div>';
	} else {
		var btnoutput = '<div class="button-container">' +
						'<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="' + q + '"' +
						'onclick="prevPage();">Prev Page</button>' +
						'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="' + q + '"' +
						'onclick="nextPage();">Next Page</button></div>';
	}

	return btnoutput;
}