// Searchbar Handler

$(function() {
	var searchField = $("#query");
	var  icon = $("#search-btn");

	// Focus Event Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width:'100%'
		},400);
		$(icon).animate({
			right:'10px'
		},400);
	});

	// Blur Event Handler
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
			// To get this key, go to https://console.developers.google.com -> Credentials -> copy the key
			key: 'AIzaSyAtWw029BEXs7g3KlteR5TfK6kxZgTJOx8'}, 
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




				})
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
	'<div class="list-right"' +
	'<h3>' + title + '</h3>' +
	'<small>By <span class="cTitle">'+channelTitle+'</span>on'+videoDate+'</small>' +
	'<p>'+description+'</p>' +
	'</div>' +
	'</li>' +
	'<div class="clearfix"></div>' +  // add the clearfix so we can clear any float
	'';
return output;
}