
													// How to update or set value using css() and attr()

// resize img
$("img").css("width","500px");

// we only want the 1st img to be 300px
$("img:first-of-type").css("width","300px");

// we want the last img to be 400px
$("img").last().css("width","400px");

// change img source

$("img").attr("src","https://images.pexels.com/photos/2131921/pexels-photo-2131921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");