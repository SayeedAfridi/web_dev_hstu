/*
  Home work
  1. if 6 occurs twice player will loose his/her entire score and round score
  2. add a second dice

*/

var scores, activePlayer, diceDOM, roundScore, isGamePlaying;

initGame();

function initGame() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  isGamePlaying = true;

  diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'none';
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

//document.getElementById('current-' + activePlayer).textContent = dice;

document.querySelector('.btn-roll').addEventListener('click', function () {
  if (isGamePlaying) {
    //01. Generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //02. display dice
    diceDOM.src = './images/dice-' + dice + '.png';
    diceDOM.style.display = 'block';
    //03. updatee ui
    if (dice > 1) {
      //add score
      roundScore += dice;
      document.getElementById(
        'current-' + activePlayer
      ).textContent = roundScore;
    } else {
      //next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (isGamePlaying) {
    // add round score to global score
    scores[activePlayer] += roundScore; //scores[activePlayer] = scores[activePlayer] + roundScore;
    var winningValue = +document.getElementById('win-value').value;
    //update the ui
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];
    //check if wins
    if (scores[activePlayer] >= winningValue) {
      //some task
      isGamePlaying = false;
      document.getElementById('name-' + activePlayer).textContent = 'winner!';
      diceDOM.style.display = 'none';
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('winner');
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active');
    } else {
      //next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', initGame);

function nextPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = roundScore;
  document.getElementById('current-1').textContent = roundScore;
  diceDOM.style.display = 'none';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}
