/*
// 022 - Operators Challenges
*/
/*
  Challenge 1

  let a = 10;
  let b = "20";
  let c = 80;
*/

/*
console.log(++a + +b++ + +c++ - +a++);
  [++a]
  - Value: 11
  - Explain: pre increment

  [+]
  - Explain: Add operator

  [+b++]
  - Value: 20
  - Explain: post increment

  [+]
  - Explain: Add operator

  [+c++]
  - Value: 80
  - Explain: post increment

  [-]
  - Explain: Minus operator

  [+a++]
  - Value: 11
  - Explain: post increment

  console.log(11 + 20 + 80 - 11)
*/

/*
console.log(++a + -b + +c++ - -a++ + +a);
  [++a]
  - Value: 13
  - Explain: pre increment

  [+]
  - Explain: Add operator

  [-b]
  - Value: -21
  - Explain: No increment

  [+]
  - Explain: Add operator

  [+c++]
  - Value: 81
  - Explain: post increment

  [-]
  - Explain: Minus operator

  [+a++]
  - Value: -13
  - Explain: post increment

  [+]
  - Explain: Add operator

  [+a]
  - Value: 14
  - Explain: post increment
  console.log(13 + -21 + 81 - -13 + 14)
*/

/*
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
  [--c]
  - Value: 81
  - Explain: pre decrement

  [+]
  - Explain: Add operator

  [+b]
  - Value: 21
  - Explain: No increment

  [+]
  - Explain: Add operator

  [--a]
  - Value: 13
  - Explain: pre decrement

  [*]
  - Explain: * operator

  [+b++]
  - Value: 21
  - Explain: post increment

  [-]
  - Explain: Minus operator

  [+b]
  - Value: 22
  - Explain: no increment

  [*]
  - Explain: * operator

  [a]
  - Value: 13
  - Explain: no increment

  [+]
  - Explain: Add operator

  [--a]
  - Value: 12
  - Explain: no increment

  [-]
  - Explain: Minus operator

  [+true]
  - Value: 1
  - Explain: true + 1
  console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1)
*/

/*
  Challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(-d + ++e * ++g + ++f); // 173
console.log(- -100 + 21 * 2 + 31); // 173
*/
/*
// 022 - Operators Challenges
*/