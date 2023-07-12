/*
// Assignments For Lessons 159 To 168
*/

/*
// Assignment 1:
let dateOne = new Date();
let birthDate = new Date("May 25 2000");
let dateDiff = dateOne - birthDate;

console.log(`${(dateDiff / 1000).toFixed()} Seconds`);
console.log(`${(dateDiff / 1000 / 60).toFixed()} Minutes`);
console.log(`${(dateDiff / 1000 / 60 / 60).toFixed()} Hours`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 365).toFixed()} Years`);
*/

/*
// Assignment 2:
let dateTwo = new Date();
dateTwo.setTime(0);
dateTwo.setFullYear(1980);
dateTwo.setHours(0);
dateTwo.setSeconds(1);

console.log(dateTwo);
*/

/*
// Assignment 3:
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dateThree = new Date();

dateThree.setDate(0);

console.log(dateThree);
console.log(
  `"Previous Month Is ${
    months[dateThree.getMonth()]
  } And Last Day Is ${dateThree.getDate()}"`
);
*/

/*
// Assignment 4:
let birthOne = new Date("2000 05 25");
console.log(birthOne);
let birthTwo = new Date("05/25/2000");
console.log(birthTwo);
let birthThree = new Date("05-25-2000");
console.log(birthThree);

*/

/*
// Assignment 5:
// let start = performance.now();

// for (let i = 0; i < 100000; i++) {
//   document.open();
//   document.write(`<div>${i}</div>`);
//   document.close();
// }

// let end = performance.now();

// let duration = end - start;

// console.log(`"Loop Took ${Math.trunc(duration)} Milliseconds."`);
*/

/*
// Assignment 6:
// function* gen(){
//     let index = 14;
//     let num = 140;
//     let sum = index + num;
//     while(true){
//         yield sum;
//         sum += num += 200;
//     }
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
*/

/*
// Assignment 7:
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll(){
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
*/

/*
// Assignment 8:
import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
*/
/*
// Assignments For Lessons 159 To 168
*/