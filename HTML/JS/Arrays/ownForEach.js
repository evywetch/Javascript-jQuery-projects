var nums = [1,2,3];
function myForEach(arr, func) {
	// loop through array
	for(var i = 0; i < arr.length ; i++) {
		// call func for each item in array
		func(arr[i]);
	}
}

// how to call it
 myForEach(nums, function(num) {
 	console.log(num);
 });

// We can add our own array method to Array object using Array.prototype()

Array.prototype.myForEach = function(func) {

	// this = nums
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

nums.myForEach(function(num) {
	console.log(num);
})