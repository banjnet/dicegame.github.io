var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	if (gamePlaying){
		//1. Random Number
	var dice = Math.floor(Math.random() * 6) + 1;

	//2. Display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';


	//3. Update the round score IF the rolled number 
	if (dice === 6 && lastDice === 6){
		//Player loses scores
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer). textContent = '0';
		nextPlayer();
	} else if (dice !== 1){
		//Add Score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		//Next Player
		nextPlayer();
	}

	lastDice = dice;

	}


});

document.querySelector('.btn-hold').addEventListener('click', function(){

	if (gamePlaying){

		scores[activePlayer] +=roundScore;

document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//check if the player won the game
if (scores[activePlayer] >= 20){
	document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.player-' + activePlayer).classList.add('player-winner'); 
	document.querySelector('.player-' + activePlayer).classList.remove('plyer-active'); 
	gamePlaying = false;
} else{
	//Net Player
	nextPlayer();

}
	}


});



function nextPlayer (){

	activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0').classList.toggle('player-active');
		document.querySelector('.player-1').classList.toggle('player-active');

		document.querySelector('.dice').style.display = 'none'; 

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0').classList.remove('player-winner');
	document.querySelector('.player-1').classList.remove('player-winner');
	document.querySelector('.player-0').classList.remove('player-active');
	document.querySelector('.player-1').classList.remove('player-active');
	document.querySelector('.player-0').classList.add('player-active');

}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;