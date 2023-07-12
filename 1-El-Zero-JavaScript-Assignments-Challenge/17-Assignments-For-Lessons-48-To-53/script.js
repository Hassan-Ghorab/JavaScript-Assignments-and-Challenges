/*
// Assignments For Lessons 48 To 53
*/

/*
// Assignment 1:
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue
  } 
  console.log(i)
}
*/

/*
// Assignment 2:
let start = 10;
let end = 0;
let Stop = 3;

for (let i = start; i > end; i--) {
if (i < start) {
  console.log(`0${i}`)
} else {
  console.log(`${i}`)
}
if (i === Stop) {
  break
}
}
*/

/*
// Assignment 3:
let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log (`${i}`)
  for (j = breaker; j < end; j += breaker) {
    console.log(`--${j}`)
  }
}
*/

/*
// Assignment 4:
let index = 10;
let jump = 2;
let end = 0;
let i = index

for (;;) {
  // Write Your Code Here
  if (i > end) {
    console.log(`${i}`)
  }
if (i === jump + jump) {
  break
}
i -= jump
}
*/

/*
// Assignment 5:
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
number = letter.length
for (let i = letter.length - letter.length; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue
  }
  console.log(`"${number} => ${friends[i]}"`)
  number++
}
*/

/*
// Assignment 6:
let start = 0;
let swappedName = "elZerO";
let result = ""

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase()
  }else if (swappedName[i] === swappedName[i].toUpperCase()){
    result += swappedName[i].toLowerCase()
  }
}
console.log(result)
*/

/*
// Assignment7:
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start + true; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue
  }
  console.log(`${mix[i]}`)
}
*/
/*
// Assignments For Lessons 48 To 53
*/