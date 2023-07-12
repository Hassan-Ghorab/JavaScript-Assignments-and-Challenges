// 35- Functions Challenge

let newReversedArray = [];
let reversedArray = [true, false, 10, 5, "Hassan"];

function reverseArray(arrValue = [1, 2, 3, 4, 5]) {
  let newReversedArray = [];
  for (element of arrValue) {
    newReversedArray.unshift(element);
  }
  return newReversedArray;
}
console.log(reverseArray(reversedArray));

let theArray = [true, false, 10, 5, "Hassan"];

function reverseArray(arr = [1, 2, 3, 4, 5]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    newReversedArray.push(arr[i]);
  }
  return newReversedArray;
}
console.log(reverseArray(theArray));

/* 
let arr = [true, false, 10, 5, "Hassan"];
let reversedArray = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArray.push(arr[i]);
}
console.log(reversedArray); */
