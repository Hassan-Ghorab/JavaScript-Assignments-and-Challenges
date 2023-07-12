/*
// 030 - String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(`${a.charAt(2).toUpperCase()}${a.slice(3, 6)}`); // Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.substr(-4, 1).repeat(8).toUpperCase()); // HHHHHHHH
console.log(a.slice(-4, -3).repeat(8).toUpperCase()); // HHHHHHHH
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 7)}${a.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  `${a.substr(0, 1).toLowerCase()}${a.substr(1, a.length - 2).toUpperCase()}${a
    .substring(a.length - 1, a.length - 0)
    .toLowerCase()}`
); // eLZERO WEB SCHOOl

console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.substr(-1).toLowerCase()
); // eLZERO WEB SCHOOl
*/