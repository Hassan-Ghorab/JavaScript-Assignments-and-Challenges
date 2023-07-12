/*
// 047 - Array Challenge
let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.push("Hassan");
my = my.reverse();
my = my.slice(counter);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(-counter, counter)); // ["Elham", "Mazero"]

my = my.slice(-counter, counter);
console.log(
  `${my[zero].slice(zero, zero + my[zero].indexOf("h"))}${my[
    zero + my[zero].indexOf("l")
  ].slice(my[zero].indexOf("h"))}`
); // "Elzero"

console.log(
  `${my[zero + true][counter + true]}${my[zero + true][
    ++counter + true
  ].toUpperCase()}`
); // "rO"

// console.log(
//   `${my[zero + my[zero].indexOf("l")][counter + my[zero].indexOf("l")]}${my[
//     zero + my[zero].indexOf("l")
//   ][counter + my[zero].indexOf("h")].toUpperCase()}`
// ); // "rO"
// 047 - Array Challenge
*/