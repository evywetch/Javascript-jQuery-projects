
var button = document.querySelector("button");
var isPurple = false;

        button.addEventListener("click",changeColor);

        // function changeColor() {
        //  // if white, make it purple
        //  if(isPurple) {
        //  	document.body.style.background = "white";
        //  } else {  // else make it white
        //  	document.body.style.background = "purple";	
        //  }

        //  isPurple = !isPurple;
        // }

 function changeColor() {
         // we want to toggle backgoung =purple on and off by using classList

         // the classList if check if the bady does not have .purple, it will add it, if it does .purple will be removed
        
         	document.body.classList.toggle("purple");
         	
        
        
        }