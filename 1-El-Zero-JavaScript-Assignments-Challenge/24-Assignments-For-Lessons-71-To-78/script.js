/*
// Assignments For Lessons 71 To 78
*/

/*
// Assignment 1:
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mySolution = mix
  .map((item) => {
    return isNaN(parseInt(item)) ? item : "";
  })
  .reduce((acc, cur) => {
    return acc + cur;
  });
console.log(mySolution);
*/

/*
// Assignment 2:

let myString = "EElllzzzzzzzeroo";

let mySolution = myString.split("").filter((item, index) => {
  return myString.indexOf(item) === index
}).reduce((acc, cur) => {
  return acc + cur;
});
console.log(mySolution);
*/

/*
// Assignment 3:
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let mySolution = myArray.reduce((acc, cur) => {
  return acc + cur;
}).split("").filter((item) => {
  return item !== ",";
}).reduce((acc, cur) => {
  return acc + cur;
})

console.log(mySolution);
*/

/*
// Assignment 4:
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let mySolution = numsAndStrings
  .filter((item) => {
    return !isNaN(item);
  })
  .map((item) => {
    return -item;
  });
console.log(mySolution);
*/

/*
// Assignment 5:
let nums = [2, 12, 11, 5, 10, 1, 99];

let mySolution = nums.reduce((acc, cur) => {
  return cur % 2 === 0 ? cur * acc : acc + cur;
}, 1)

console.log(mySolution)
*/

/*
// Assignments For Lessons 71 To 78
*/