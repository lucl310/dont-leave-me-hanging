var wordBank = ['coat', 'motorcycle', 'train', 'cookie', 'grass', 'ear', 'milk', 'snowman', 'circle', 'jar', 'branch', 'truck', 'jacket', 'jellyfish']
console.log(wordBank)
var textarea = document.getElementsByTagName('textarea')
var number = Math.floor(Math.random()*14)
console.log(number)
function dashGenerator(random) {
	if (random === 0) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ - something that you wear";
	}
	else if (random === 1) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ _ _ _ _ _ - a bike with a motor";
	}
	else if (random === 2) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ - i like ...";
	}
	else if (random === 3) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ _ - a baked good";
	}
	else if (random === 4) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ - the lawn";
	}
	else if (random === 5) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ - of corn";
	}
	else if (random === 6) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ - sour...";
	}
	else if (random === 7) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ _ _ - man of snow";
	}
	else if (random === 8) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ _ - not a square";
	}
	else if (random === 9) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ - store jam in this";
	}
	else if (random === 10) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ _ - of a tree";
	}
	else if (random === 11) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ - truck";
	}
	else if (random === 12) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ _ - something you wear";
	}
	else if (random === 13) {
		document.getElementById("dashWrapper").innerHTML = "_ _ _ _ _ _ _ _ _ - a fish of jelly";
	}else{
		console.log('THERE HAS BEEN AN ERROR')
	}
	if (textarea == 'Write Your Answer Here') {
		console.log(cow)
	}
}	
dashGenerator(number)