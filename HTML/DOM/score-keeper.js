
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numberInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");


var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}

		p1Display.textContent = p1Score;
		
	}

});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
	}

	p2Display.textContent = p2Score;
	}

});

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

//"change"  event will run anytime the value changes, it doesn't matter if user click or type
numberInput.addEventListener("change", function() {
winningScoreDisplay.textContent = this.value;  // "this" refers to numberInput
// we can't just do winningScore = numberInput.value; --> numberInput.value returns String not number
winningScore = Number(this.value);  // cast String to number

// whenever the user change the winning score, reset everything, to prevent bug if user change winning score half way
reset();
});

