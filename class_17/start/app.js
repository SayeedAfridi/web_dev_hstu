var scores, activePlayer, diceDOM, roundScore;

scores = [0, 0];
activePlayer = 0;
roundScore = 0;

diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'none';
//document.getElementById('current-' + activePlayer).textContent = dice;

document.querySelector('.btn-roll').addEventListener('click', function () {
  //01. Generate a random number
  var dice = Math.floor(Math.random() * 6) + 1;
  //02. display dice
  diceDOM.src = './images/dice-' + dice + '.png';
  diceDOM.style.display = 'block';
  //03. updatee ui
  if (dice > 1) {
    //add score
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    //next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;
    diceDOM.style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }
});
