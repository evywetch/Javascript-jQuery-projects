var comments = {};
comments.data = ["Good job!", "Bye!", "Lame...."];

comments.print = function() {
	/* - we want to use comments.data in this method
	   - we can use keyword " this " as 'comments' object as if it was refered already
	   - this in this case means onject "comments"	*/
	this.data.forEach(function(el) {
		console.log(el);
	});
}

comments.print();