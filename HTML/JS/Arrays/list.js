 // use window.setTimeout() to force Chrome to display content before running JS
 // Otherwise it will not display any content in the page unless we are done with the JS

window.setTimeout(function() { 
var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	// handle input
if(input === "list") {
	listTodo();
} else if(input === "new") {
	addTodo();
} else if(input === "delete") {
	deleteTodo();
}
// ask again for new input
input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP!")

function listTodo() {
// todo = each item of todos, i = index of that item
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("************************");
}

function addTodo() {
// ask for new todo
var newTodo = prompt("Enter new todo");
	// add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
// ask index for that todo to be deleted
	var index = prompt("Enter index of todo to delete");

	// delete that todo
	// user splice() - we can delete anywhere in the array
	// index = start index u want to delete , 1 = how many item u want to delete following that index
	todos.splice(index,1);
	console.log("deleted Todo");
} 

}, 500);


