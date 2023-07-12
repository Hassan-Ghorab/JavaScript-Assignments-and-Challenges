/*
// 70 - Arrow Function Challenge

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// function printNames(...names) {
//   return `String [${names.join("], [")}] => Done !`;
// }

let printNames = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(printNames("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => nums[+(!Array.isArray(myNumbers))] + one + two;
// let calc = (one, two, ...nums) => nums[+(Array.isArray(myNumbers))] + one;
// let calc = (one, two, ...nums) => nums[+true] + one;

// function calc(one, two, ...nums) {
//   return one + two + nums[0];
// }

// console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80
//*