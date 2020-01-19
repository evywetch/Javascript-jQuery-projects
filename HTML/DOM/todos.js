var lis = document.querySelectorAll("li");   // var li = document.querySelector("li");   this will give the 1st li

for(var i = 0; i < lis.length ; i++) {
// mouseover will start firing as soon as u hover the firstLi
lis[i].addEventListener("mouseover", function(){
this.classList.add("selected");
});
// mouseout will fire when u pull the mouse away
lis[i].addEventListener("mouseout", function() {
	this.classList.remove("selected");
});
// when u click on li, it will add class= "done", which class done will gray out that li
lis[i].addEventListener("click", function() {
	this.classList.toggle("done");
});
}