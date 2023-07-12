/*
// 063 - Random Arguments Function Challenge

  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator

  function showDetails(a, b, c) {
  let name, age, status;
  if (typeof a === "string") {
    name = a;
  } else if (typeof a === "number") {
    age = a;
  } else {
    status = a;
  }
  if (typeof b === "string") {
    name = b;
  } else if (typeof b === "number") {
    age = b;
  } else {
    status = b;
  }
  if (typeof c === "string") {
    name = c;
  } else if (typeof c === "number") {
    age = c;
  } else {
    status = c;
  }

  if (status === true) {
    status = "You Are Available For Hire";
  } else {
    status = "You Are Not Available For Hire";
  }
  result = `Hello ${name}, Your Age Is ${age}, ${status}`;
  console.log(result);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("=".repeat(40))
console.log("=".repeat(40))

function showDetailsTernary(a, b, c) {
  let name, age, status;
  a = "string"? name = a : a = "number"? name = a : name = a 
  b = "string"? age = b : b = "number"? age = b : age = b 
  c = "string"? status = c : b = "number"? status = b : status = b 
  status = true? "You Are Available For Hire" : "You Are Not Available For Hire"

  result = `Hello ${name}, Your Age Is ${age}, ${status}`;
  console.log(result);
}

showDetailsTernary("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetailsTernary(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetailsTernary(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetailsTernary(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/