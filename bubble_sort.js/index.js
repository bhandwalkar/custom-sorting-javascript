var input = [ 4, 5, 3, 6, 2, 7];




const bubbleLarge = function (input) {
	
	for(let i = 0; i < input.length; i++) {
		for(let j = 0; j < input.length - i - 1; j++) {
			let temp;
			if(input[j] > input[j + 1]) {
				temp = input[j];
				input[j] = input[j + 1];
				input[ j + 1 ] = temp;
			}
		} 
	}
	return input;
}

const bubbleSmall = function (input) {
	for(let j = input.length - 1; j > -1; j--) {
		for(let k = input.length - 1; k > input.length - j - 1; k--) {
			let temp;
			if(input[k] < input[k - 1]) {
				temp = input[k];
				input[k] = input[k - 1];
				input[k - 1] = temp;
			}
		}
	}
	return input;
}


// console.log('sorted array-->', bubbleLarge(input));
console.log('sorted array-->', bubbleSmall(input));


