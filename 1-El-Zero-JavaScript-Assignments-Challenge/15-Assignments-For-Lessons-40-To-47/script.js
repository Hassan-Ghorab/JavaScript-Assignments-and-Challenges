/*
// Assignments For Lessons 40 To 47
*/

/*
// Assignment 1:
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.pop()
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends = myFriends.slice(0, num)
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.length = num
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
*/

/*
// Assignment 2:
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]
*/

/*
// Assignment 3:
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
*/

/*
// Assignment 4:
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[website.length][website.length - website.length]
    .slice(website.length)
    .toUpperCase()
); // ZERO
*/

/*
// Assignment 5:
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found")
};

if (haystack.indexOf(needle)) {
  console.log("Found")
}

if (needle === haystack[1]) {
  console.log("Found")
}
*/

/*
// Assignment 6:
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrS = [];

// Your Code Here
allArrS = arr1.concat(arr2).sort().join("").slice(-arr1.length).toLowerCase();
// allArrS = arr1
//   .concat(arr2)
//   .sort()
//   .join("")
//   .slice(arr2.indexOf("E") + arr2.indexOf("Y"))
//   .toLowerCase();
console.log(allArrS); // fxy
*/
/*
// Assignments For Lessons 40 To 47
*/