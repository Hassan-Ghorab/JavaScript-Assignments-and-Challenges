/*
// Assignments For Lessons 57 To 63
*/

/*
// Assignment 1:
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`)
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`)
  } else {
    console.log(`Hello ${theName}`)
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

/*
// Assignment 2:
function calculate(firstNum, secondNum, operation) {
  if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else if (firstNum === undefined) {
    console.log("The First Number Is Not Found")
  } else if (secondNum === undefined) {
    console.log("The Second Number Is Not Found")
  } else if (operation === undefined){
    console.log(firstNum + secondNum)
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

*/

/*
// Assignment 3:
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`
    Age with years is ${theAge}
    Age with months is ${theAge * 12}
    Age with weeks is ${theAge * 12 * 4}
    Age with days is ${theAge * 12 * 4 * 7}
    Age with hours is ${theAge * 12 * 4 * 24}
    Age with minutes is ${theAge * 12 * 4 * 24 * 60}
    Age with seconds is ${theAge * 12 * 4 * 24 * 60 * 60}
`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(22); // Months Example => 456 Months
*/

/*
// Assignment 4:

// It's the same as the challenge
*/

/*
// Assignment 5:
let showYear;

function createSelectBox(startYear, endYear) {
  document.open()
  document.write(`<select>`)
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`)
  }
  document.write(`</select>`)
  document.close()
}
createSelectBox(2000, 2021);
*/

/*
// Assignment 6:
function multiply (...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue
    } else {
      result = parseInt(numbers[i - 1]) * parseInt(numbers[i])
    }
  }
  return result
}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
*/

/*
// Assignments For Lessons 57 To 63
*/
