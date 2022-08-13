// ----Exercise #1----
const bananaCheck = document.querySelector("#banana-check");
const checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", function () {
  if (checkInputBananaTrue(bananaCheck.children[5].value)) {
    alert("PAPAYA");
  } else {
    alert('Please write "banana"!');
  }
  bananaCheck.children[5].value = "";
});

function checkInputBananaTrue(text) {
  const words = text.split(" ");

  for (const word of words) {
    if (word.toLowerCase() === "banana") {
      return true;
    }
  }
  return false;
}

// ----Exercise #2----
const input = document.querySelector("#input");
const checkBtn1 = document.querySelector("#check-btn1");
const chartReplace = document.querySelector("#chart-replace");

checkBtn1.addEventListener("click", replaceMostOccurredChart);

function replaceMostOccurredChart() {
  const maxLetter = findMostOccurredChart(input.value);
  chartReplace.innerHTML = input.value.replaceAll(maxLetter.letter, "😎");
}

function findMostOccurredChart(string) {
  const letterCounter = {};

  for (const letter of string) {
    if (letterCounter[letter]) {
      letterCounter[letter]++;
    } else {
      letterCounter[letter] = 1;
    }
  }

  let max = {
    letter: null,
    counter: 0,
  };
  for (const letter in letterCounter) {
    if (letterCounter[letter] > max.counter) {
      max.counter = letterCounter[letter];
      max.letter = letter;
    }
  }

  return max;
}

// ----Exercise #2 Daniel----
// //get elements
// const myInp = document.querySelector("#my-inp");
// const checkBtn2 = document.getElementById("check");
// const result = document.getElementById("result");

// checkBtn2.addEventListener("click", replaceHighOccurrenceLetter);

// function replaceHighOccurrenceLetter() {
//   const maxLetter = findMostOccurredLetter(myInp.value);
//   result.innerHTML = myInp.value.replaceAll(maxLetter.letter, "😎");
// }

// function findMostOccurredLetter(str) {
//   const letterCounter = {};

//   for (const letter of str) {
//     if (letterCounter[letter]) {
//       letterCounter[letter]++;
//     } else {
//       letterCounter[letter] = 1;
//     }
//   }

//   let max = {
//     letter: null,
//     counter: 0,
//   };
//   for (const letter in letterCounter) {
//     if (letterCounter[letter] > max.counter) {
//       max.counter = letterCounter[letter];
//       max.letter = letter;
//     }
//   }

//   return max;
// }

// ----Exercise #3----
const messageOutput = document.getElementById("message-output");
const checkBtn3 = document.getElementById("check-btn3");

const messagesList = [
  "Hello!",
  "Get your prise, you win!",
  "Next time you get another message😜",
  "Goodbye my friend, see you soon if you click right now!",
  "ha-ha-ha-ha-ha",
  "🍷🍹🍸🍺🍻☕🍼 - choose your favorite drink!",
  "🥙🌭🍔🍕🍟🥞🍣 - choose your favorite junk food!",
  "🍰🎂🍪🍩🍧🍫🍨 - choose your favorite sweets!",
  "🍉🍊🍌🍍🍒🍏🍐🥝 - choose your favorite fruit!",
];

function getRandomNumber() {
  result = Math.floor(Math.random() * 9);

  return result;
}

checkBtn3.addEventListener("click", function () {
  let index = getRandomNumber(0, messagesList.length);
  messageOutput.innerHTML = messagesList[index];
});

// ----Exercise #4----
const fromDate = document.querySelector("#from-date");
const toDate = document.querySelector("#to-date");
const checkBtn4 = document.getElementById("check-btn4");
const answerOutput = document.querySelector("#answer-output");

checkBtn4.addEventListener("click", countDaysBetweenDates);

function countDaysBetweenDates() {
  const fDate = new Date(fromDate.value);
  const tDate = new Date(toDate.value);
  const countDiffInTime = tDate.getTime() - fDate.getTime();
  const countDiffInDays = countDiffInTime / 1000 / 60 / 60 / 24;
  answerOutput.innerHTML = `The count of days is: <br/> ${countDiffInDays} days`;
}
