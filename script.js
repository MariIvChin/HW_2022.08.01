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
const chartReplace = document.querySelector("#chart-replace");
const input = document.querySelector("#input");
const checkBtn1 = document.querySelector("#check-btn");

checkBtn1.addEventListener("click", replaceMostOccurredChart());

function replaceMostOccurredChart() {}

function findMostOccurredChart() {}

// ----Exercise #2 Daniel----
// get elements
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

function getRandomMessage() {
  let index = getRandomNumber(0, messagesList.length);
  messageOutput.innerHTML = messagesList[index];
}

// ----Exercise #4----
const daysCount = document.querySelector("#days-count");
console.dir(daysCount);

// Check Input1.value="date1" > Check Input2.value="date2", return to output.value count of days
// 1. create fun1 - ? new Date().get....
// 2. create fun2 - html output
// 3. create fun3 - onclick="countDaysBetweenDates()"
