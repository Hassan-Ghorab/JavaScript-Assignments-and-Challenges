/*
// 78 - Higher Order Functions - Challenge

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

  let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").map((item) => {
//   return item !== "," ? item : "";
// }).filter((item) => {
//   return isNaN(item)
// }).reduce((prevItem, currentItem) => {
//   return prevItem + currentItem;
// }).slice(true, -isNaN(myString)).replaceAll("_", " ")

let solution = myString
  .split(",")
  .filter(function (ele) {
    return Number.isNaN(parseInt(ele)) && ele != "Z";
  })
  .map(function (ele) {
    return ele == "_" ? " " : ele;
  })
  .reduce(function (acc, cur) {
    return `${acc}${cur}`;
  })
  .slice(true);

console.log(solution); // Elzero Web School
*/