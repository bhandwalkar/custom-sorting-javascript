var input = [ 4, 5, 3, 6, 2, 7];




const bubbleSelection = function (input) {
	
	let min;
	for(let i = 0; i < input.length; i++) {
		min = i;
		for(let j = i; j < input.length; j++) {
			let temp;
			if(input[j] < input[min]) {
				min = j;
			}
		} 
		temp = input[i];
		input[i] = input[min];
		input[min] = temp;
	}
	return input;
}



// console.log('sorted array-->', bubbleLarge(input));
console.log('sorted array-->', bubbleSelection(input));


