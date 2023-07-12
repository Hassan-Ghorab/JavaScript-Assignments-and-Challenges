/*
// 056 - Loop Challenge
document.open() 
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let showAdmins = 3

let counterOne = 0;
let counterTwo = 0;
let counterThree = 0;

document.write(`<div>We Have ${showAdmins} Admins</div>`);

for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  document.write(`<hr>`)
  document.write(`<div>`)
  document.write(`<p>The Admin for the Team ${i + 1} Is ${myAdmins[i]}</p>`)
  document.write(`<h2>Team Members:</h2>`);
  for (j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i].startsWith("A") && myEmployees[j].startsWith("A")) {
      document.write(`<p>- ${++counterOne} ${myEmployees[j]}</p>`)
    }
    else if (myAdmins[i].startsWith("O") && myEmployees[j].startsWith("O")) {
      document.write(`<p>- ${++counterTwo} ${myEmployees[j]}</p>`)
    }
    else if (myAdmins[i].startsWith("S") && myEmployees[j].startsWith("S")) {
      document.write(`<p>- ${++counterThree} ${myEmployees[j]}</p>`)
    }
  }
  document.write(`</div>`)
}
document.close()
*/