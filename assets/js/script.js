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
const artWord = document.getElementById('word');
const artLetters = document.getElementById('letters');
let spaces;
let btnLetters;
let error = 0;

window.addEventListener('load', init());

function init() {
  word = words[Math.floor(Math.random() * words.length)];
  maxScore = word.length;
  showWordSpaces(word);
  showButtons(word);
}

// btnLetters.forEach((btn) => {
//   btn.addEventListener('click', function () {
//     checkLetter(btn.value);
//   });
// });

function showWordSpaces(myWord) {
  for (let i = 0; i < myWord.length; i++) {
    const mySpan = document.createElement('span');
    mySpan.classList.add(
      'd-block',
      'text-center',
      'display-6',
      'fw-bold',
      'border-bottom',
      'border-1',
      'border-secondary'
    );
    mySpan.innerHTML = '&nbsp;';

    artWord.appendChild(mySpan);
  }

  spaces = document.querySelectorAll('#word > span');
}

function showButtons(myWord) {
  const myStr = randomLetters(myWord);
  for (let i = 0; i < myStr.length; i++) {
    const myBtn = document.createElement('button');
    myBtn.classList.add('letter');
    myBtn.value = myStr[i];
    myBtn.innerText = myStr[i].toUpperCase();
    myBtn.addEventListener('click', function () {
      checkLetter(myBtn.value);
      myBtn.setAttribute('disabled', 'true');
    });

    artLetters.appendChild(myBtn);
  }
  btnLetters = document.querySelectorAll('#letters button');
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

function randomLetters(myWord) {
  const totalLetters = 14 - myWord.length;
  let myArr = myWord.split('');
  let myAlphabet = updateAlphabet(myWord, alphabet);
  for (let i = 0; i < totalLetters; i++) {
    const myLetter = myAlphabet[Math.floor(Math.random() * myAlphabet.length)];
    myArr.push(myLetter);
    myAlphabet = updateAlphabet(myLetter, myAlphabet);
  }
  console.log(myArr);
  return randomiseLetters(myArr);
}

function updateAlphabet(str, myAlphabet) {
  let myAlph = [...myAlphabet];
  for (let i = 0; i < str.length; i++) {
    const index = myAlph.indexOf(str[i]);
    myAlph.splice(index, 1);
  }
  return myAlph;
}

function randomiseLetters(arr) {
  const range = arr.length;
  const randomisedArr = [];
  for (let i = 0; i < range; i++) {
    const index = Math.floor(Math.random() * arr.length);
    randomisedArr.push(arr[index]);
    arr.splice(index, 1);
  }
  console.log(randomisedArr.join(''));
  return randomisedArr.join('');
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
