const words = ['cane', 'pane', 'sale', 'porta', 'daino'];
let word = '';
let maxScore = 0;
let score = 0;
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'z',
];
const sectLetters = document.getElementById('letters');
const spaces = document.querySelectorAll('#word > span');
const btnLetters = document.querySelectorAll('#letters button');
let error = 0;

window.addEventListener('load', init());

function init() {
  word = words[Math.floor(Math.random() * words.length)];
  maxScore = word.length;
  // TODO implementare funzione per mostrare spazi lettere della parola
  showWordSpaces(word);
  showButtons(word);
}

// btnLetters.forEach((btn) => {
//   btn.addEventListener('click', function () {
//     checkLetter(btn.value);
//   });
// });

function showButtons(myWord) {
  for (let i = 0; i < myWord.length; i++) {
    const myBtn = document.createElement('button');
    myBtn.classList.add('letter');
    myBtn.value = myWord[i];
    myBtn.innerText = myWord[i].toUpperCase();
    myBtn.addEventListener('click', function () {
      checkLetter(myBtn.value);
    });

    sectLetters.appendChild(myBtn);
  }
}

function checkLetter(value) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === value) {
      spaces[i].innerText = value.toUpperCase();
      score++;
      setTimeout(() => {
        checkScore(score);
      }, 300);
      return;
    }
  }
  error++;
  updateError(error);
}

function updateError(myError) {
  switch (myError) {
    case 0:
      break;
    case 1:
      document.getElementById('hangmanHead').style.opacity = 1;
      break;
    case 2:
      document.getElementById('hangmanBody').style.opacity = 1;
      break;
    case 3:
      document.getElementById('hangmanRArm').style.opacity = 1;
      break;
    case 4:
      document.getElementById('hangmanLArm').style.opacity = 1;
      break;
    case 5:
      document.getElementById('hangmanRLeg').style.opacity = 1;
      break;
    case 6:
      document.getElementById('hangmanLLeg').style.opacity = 1;
      setTimeout(() => {
        gameOver();
      }, 300);
      break;
  }
}

function checkScore(myScore) {
  if (myScore === maxScore) {
    win();
    return;
  }
}

function win() {
  btnLetters.forEach((btn) => {
    btn.setAttribute('disabled', 'true');
  });
  alert('You WIN!!');
}

function gameOver() {
  btnLetters.forEach((btn) => {
    btn.setAttribute('disabled', 'true');
  });
  alert('You LOSE!!');
}
