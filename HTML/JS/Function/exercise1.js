
// function isEven(x) {
// 	if(x % 2 === 0) {
// 		return true;
// 	}

// 	return false;
// }

// this is shorter

function isEven(x){
	return x % 2 === 0;
}

console.log(isEven(4))
console.log(isEven(21))
console.log(isEven(68))
console.log(isEven(333))

function factorial(x) {
	var result = 1;
	for(var i = 2; i <= x; i++) {
		result *= i;
	}
	return result;
}

console.log(factorial(5))
console.log(factorial(2))
console.log(factorial(10))
console.log(factorial(0))

function kebabToSnake(str) {
	return str.replace("-","_");
}

console.log(kebabToSnake("hello-world"))
