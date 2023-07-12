/*
// Assignments For Lessons 79 To 85
*/

/*
// Assignment 1: 
const member = {
  name: "Hassan",
  age: 23,
  country: "Egypt",
  fullDetails: function() {
    return `My name is ${member.name} My age is ${member.age}, I live in ${member.country}`;
  }
}

console.log(member.name); 
console.log(member.age); 
console.log(member.country);
console.log(member.fullDetails());
*/

/*
// Assignment 2: 
// Method One
// Create Your Object Here
const objMethodOne = {
  name: "Hassan",
  age: 23,
  country: "Egypt",
  fullDetails: function () {
    return `My name is ${member.name} My age is ${member.age}, I live in ${member.country}`;
  },
};

console.log(objMethodOne.name); // "Method One"

// Method Two
// Create Your Object Here
// program to create JavaScript object using instance of an object
const objMethodTwo = new Object({
  name: "Hassan",
  age: 23,
  hobbies: ["reading", "games", "coding"],
  greet: function () {
    console.log("Hello everyone.");
  },
});

console.log(objMethodTwo.age); // "Method Two"

// Method Three
// Create Your Object Here

function objMethodThree() {
  (this.name = "Hassan"),
    (this.age = 23),
    (this.hobbies = ["reading", "games", "coding"]),
    (this.greet = function () {
      console.log("Hello everyone.");
    });
}

const person = new objMethodThree();

console.log(person.hobbies[1]); // "Method Three"

// Method Four
// Create Your Object Here

const objMethodFour = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
  },
};
const me = Object.create(objMethodFour);
me.name = "Hassan";
me.isStudying = true;
me.printIntroduction();

console.log(objMethodFour.isStudying); // "Method Four"
*/

/*
// Assignment 3: 
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let newObj = Object.assign({}, a, threeNums, twoNums);
console.log(newObj)

*/

/*
// Assignment 4: 
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

let game = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${game[i]}`);
  console.log(`The Publisher Is ${myFavGames[game[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[game[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.hasOwn(myFavGames[game[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}
*/

/*
// Assignments For Lessons 79 To 85
*/