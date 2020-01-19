
// var boolean = true;
// while(boolean) {
// 	var answer = prompt("Are we there yet?");
// 	if(answer === "yes" || answer === "yeah") {
// 		alert("Yay, we finally made it!");
// 		boolean = false;
// 	}
// }


// this version is shorter
// var answer = prompt("Are we there yet?");   
//  while(answer !== "yes" && answer !== "yeah") {
// 	 var answer = prompt("Are we there yet?");
// }
// alert("Yay, we finally made it!");


// advanced version -- if the answer contains the word "yes" , it will show alert
var answer = prompt("Are we there yet?");   
 while(answer.indexOf("yes") === -1) {
	 var answer = prompt("Are we there yet?");
}
alert("Yay, we finally made it!");

