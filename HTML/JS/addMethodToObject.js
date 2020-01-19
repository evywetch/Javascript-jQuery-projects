var obj = {
	name : "Chuck",
	ahe: 45,
	isCool: false,
	friends: ["Bob","Tina"],
	add: function(x,y) {
		return x+y;
	}
}

/* how to call a method in object */
obj.add(10,5);

/*

Why do we need to make methods in Object?

1. To keep the code organized, so u can group thing logicly together

Ex. var dogSpace = {};

dogSpace.speak = function() {
	return "WOOF!";
}

var catSpace = {};

catSpace.speak = function() {
	return "MEOW!";
}

dogSpace.speak();  // WOOF!
catSpace.speak();  // MEOW!

// To do this, we can prevent name collision, we can the same method name, but they work differently

*/