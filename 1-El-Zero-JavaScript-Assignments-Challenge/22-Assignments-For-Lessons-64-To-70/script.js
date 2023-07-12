/*
// Assignments For Lessons 64 To 70
*/

/*
// Assignment 1: Make a function named getDetails that takes three parameters zName, zAge, zCountry

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return `${zName.slice(0, zName.indexOf(" "))}${zName
      .substr(zName.indexOf(" "), 2)
      .toUpperCase()}.`;
  }
  namePattern();
  function ageWithMessage() {
    return `Your age is ${parseInt(zAge)}`;
  }
  ageWithMessage();
  function countryTwoLetters() {
    return `You live in ${zCountry.substr(0, 2).toUpperCase()}`;
  }
  countryTwoLetters();

  function fullDetails() {
    return`Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
*/

/*
// Assignment 2: turn the functions into arrow functions
// function itsMe() {
//   return `I am A Normal Function`;
// }

let itsMe = () => `I am An Arrow Function`;

console.log(itsMe()); // I am A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

/*
// Assignment 3: turn the functions into arrow functions
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Available`;
//     };
//   };
// }

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // I am Not Available
*/

/*
// Assignment : make a function that takes unknown numbers of parameters
// if the parameters are numbers calc them
// if the parameters has numbers and strings extract the numbers and sum them
// if the parameters were strings print "All Is Strings"

// function specialMix(...data) {
//   let result = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (isNaN(parseInt(data[i])) === false) {
//       result += parseInt(data[i]);
//     }
//   }

//   if (result === 0) {
//     return "All is strings";
//   }

//   return result;
// }

function specialMix(...data) {
  result = 0;
  for (let i = 0; i < data.length; i++) {
    isNaN(parseInt(data[i])) ? (data[i] = 0) : (result += parseInt(data[i]));
  }
  return result || "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/

/*
// Assignments For Lessons 64 To 70
*/