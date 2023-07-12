/*
// Assignments For Lessons 134 To 145
*/

/*
// Assignment: 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipReg = /(\d+|D+)+/g;
console.log(ip.match(ipReg));
*/

/*
// Assignment: 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesReg = /\b(Os)\d*O/g;
console.log(specialNames.match(specialNamesReg));
*/

/*
// Assignment: 3
let phone = "+(995)-123 (4567)";
let phoneReg = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(phoneReg));
*/

////////////////// Assignment: 4 //////////////////

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;

// /https?: it can be exists or not and the colon
// \/\/ Slashes exist
// (?:[-\w]+\.)? www. can be exists or not
// ([-\w]+)\. the word of the site
// \w+ any part after . "org"
// (?:\.\w+)? the part after the domain name
// \/?.*/i everything is coming after all of the above code

////////////////// Assignment: 4 //////////////////

/*
// Assignment: 5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}\s?-?\s?\/?\d{2}\s?-?\s?\/?\d{0,}/g

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
*/

/*
// Assignments For Lessons 134 To 145
*/