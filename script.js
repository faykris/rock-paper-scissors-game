const options = [
  { id: 1, url: 'images/icon-paper.svg', name: 'paper', background: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))' },
  { id: 2, url: 'images/icon-rock.svg', name: 'rock', background: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))' },
  { id: 3, url: 'images/icon-scissors.svg', name: 'scissors', background: 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))' },
]

let scoreCounter = 0;

function selectOption(option) {
  const optionSelector = document.getElementById('option-selector');
  const optionMatch = document.querySelector('#option-match');
  const selectedOption = document.querySelector('#selected-option');
  const selectedImage = document.querySelector('#selected-img');
  const computerOption = document.querySelector('#computer-option');
  const computerImage = document.querySelector('#computer-img');
  const selectedObject = options.filter(function(opt) { return opt.id === option})[0];
  const computerObject = options[Math.floor(Math.random()*options.length)];
  const matchResult = document.querySelector('#result-text');
  const scoreNumber = document.querySelector('#score-number');
  let resultText = '';


  optionSelector.style.display = 'none';
  optionMatch.style.display = 'flex';

  selectedOption.style.background = selectedObject.background;
  selectedImage.src = selectedObject.url;
  selectedImage.alt = selectedObject.name;

  computerOption.style.background = computerObject.background;
  computerImage.src = computerObject.url;
  computerImage.alt = computerObject.name;

  if (selectedObject.id === computerObject.id) {
    resultText = 'DRAW';
  } else if (
    (selectedObject.id === 1 && computerObject.id === 2) ||
    (selectedObject.id === 2 && computerObject.id === 3) ||
    (selectedObject.id === 3 && computerObject.id === 1)
  ) {
    resultText = 'YOU WIN';
    scoreCounter += 1;
  } else {
    resultText = 'YOU LOSE';
    if (scoreCounter > 0) {
      scoreCounter -= 1;
    }
  }
  scoreNumber.innerHTML = scoreCounter;
  matchResult.innerHTML = resultText; 
}

function playAgain() {
  const optionSelector = document.getElementById('option-selector');
  const optionMatch = document.querySelector('#option-match');

  optionSelector.style.display = 'flex';
  optionMatch.style.display = 'none';
}