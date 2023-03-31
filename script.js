const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const btn = document.querySelector('.btn');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

setInterval(interval, 200);

function interval() {
	let randomColor = [];
	for (j = 0; j < 4; j++) {
		let hex = '#';
		for (i = 0; i < 6; i++) {
			hex += hexColor[randomNum()];
		}
		randomColor.push(hex);
	}
	console.log(randomColor);

	function randomNum() {
		return Math.floor(Math.random() * hexColor.length);
	}

	randomColor.forEach(function (item) {
		console.log(item);
	});

	document.getElementById('1').textContent = randomColor[0];
	color1.style.backgroundColor = randomColor[0];

	document.getElementById('2').textContent = randomColor[1];
	color2.style.backgroundColor = randomColor[1];

	document.getElementById('3').textContent = randomColor[2];
	color3.style.backgroundColor = randomColor[2];

	document.getElementById('4').textContent = randomColor[3];
	color4.style.backgroundColor = randomColor[3];
}
