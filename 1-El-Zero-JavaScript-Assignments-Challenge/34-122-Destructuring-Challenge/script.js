/*
// 122 - Destructuring Challenge
// Assignments 6:

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

const [member1, member2, member3] = myFriends;

let membersDetails = (friendObj) => {
  const {
    title: t,
    age: a,
    available: ava,
    skills: [, s2],
  } = friendObj;

  console.log(`${t} ${a} ${ava ? "available" : "notAvailable"} ${s2}`);
};

// If chosen === 1

// ("Osama"); 39; ("Available"); ("CSS");

// If chosen === 2

// ("Ahmed"); 25; ("Not Available"); ("Django");

// If chosen === 3

// ("Sayed"); 33; ("Available"); ("Laravel");

if (chosen === 1) membersDetails(member1);
if (chosen === 2) membersDetails(member2);
if (chosen === 3) membersDetails(member3);
*/