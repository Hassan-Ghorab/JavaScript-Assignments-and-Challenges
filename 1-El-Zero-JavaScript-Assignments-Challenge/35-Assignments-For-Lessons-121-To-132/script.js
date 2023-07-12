/*
// Assignments For Lessons 121 To 132
*/

/*
// Assignment 1:
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);
*/

/*
// Assignment 2:
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let newFriends = new Set(myFriends.sort());
console.log(myFriends);
console.log(newFriends);
console.log(new Set(myFriends.sort()));
*/

/*
// Assignment 3:
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let mapObj = new Map(Object.entries(myInfo));
console.log(mapObj);
console.log(mapObj.size);
console.log(mapObj.has("role"));
*/

/*
// Assignment 4:
let theNumber = 100020003000;
console.log(
  +[...new Set(theNumber.toString())].sort().sort().slice(true).join("")
);
*/

/*
// Assignment 5:
let theName = "Elzero";
console.log(Array.from(theName));
console.log([...theName]);
console.log(Object.assign([], theName));
console.log(theName.split(""));
console.log(Array.prototype.slice.call(theName));
console.log([...new Set(theName)]);
const stringArray = [];
for (const letters of theName) {
  stringArray.push(letters);
}
console.log(stringArray);
*/

/*
// Assignment 6:

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.sort();
chars.copyWithin(0, 3, 6);
console.log(chars);

let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
chars.sort();
chars.copyWithin(0, 4, 8);
console.log(chars)

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
chars.copyWithin(2);
console.log(chars)
*/

/*
// Assignment 7:
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo)
console.log(numsOne);


// const mergedArray = numsTwo.reduce((arr, item) => {
//   arr.push(item);
//   return arr;    
// }, numsOne);
// console.log(mergedArray);

// const mergeArrays = (first, second) => {
//   for (let i = 0; i < second.length; i++) {
//     first.push(second[i]);
//   }
//   return first;
// };
// console.log(mergeArrays(numsOne, numsTwo));
*/

/*
// Assignments For Lessons 121 To 132
*/