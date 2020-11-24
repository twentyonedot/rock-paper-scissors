let options = ['rock', 'paper', 'scissors'];
let wins = {
	rock: 'scissors',
	paper: 'rock',
	scissors: 'paper',
};
let result = document.querySelector('#results');

document.addEventListener(
	'click',
	(event) => {
		let selected = event.target.getAttribute('data-rps');
		if (!selected) {
			return;
		}
		play(selected);
	},
	false
);

function play(selected) {
	let opponent = getOpponent();
	if (selected === opponent) {
		renderTie(selected);
	} else if (wins[selected] === opponent) {
		renderWin(selected, opponent);
	} else {
		renderLoss(opponent, selected);
	}
}

function getOpponent() {
	return shuffle(options.slice())[0];
}

function shuffle(array) {
	let currIndex = array.length;
	let tempValue, randIndex;
	while (0 !== currIndex) {
		randIndex = Math.floor(Math.random() * currIndex);
		currIndex--;

		tempValue = array[currIndex];
		array[currIndex] = array[randIndex];
		array[randIndex] = tempValue;
	}

	return array;
}
function renderTie(selected) {
	result.innerHTML = '<h2>Tie!</h2>' + '<p>You both chose ' + selected + '</p>';
}
function renderWin(won, lost) {
	result.innerHTML =
		'<h2>You Win!</h2>' + '<p>' + won + ' beats ' + lost + '</p>';
}
function renderLoss(won, lost) {
	result.innerHTML =
		'<h2>You Lost...</h2>' + '<p>' + won + ' beats ' + lost + '</p>';
}
