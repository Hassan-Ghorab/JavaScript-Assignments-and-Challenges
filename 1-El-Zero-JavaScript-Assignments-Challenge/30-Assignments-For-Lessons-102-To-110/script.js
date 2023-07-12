/*
// Assignments For Lessons 102 To 110
*/


// Assignment 1:
let number = prompt("Print Number From – To", "Example: 5-20");
let numbersOrder = number.split("-").sort((a, b) => a - b);

for (let i = +numbersOrder[0]; i <= numbersOrder[1]; i++) {
  let newNumber = document.createElement("div");
  newNumber.textContent = i;
  document.body.appendChild(newNumber);
}



// Assignment 2:
function popup() {
  const popupContainer = document.createElement("div");
  const popupTitle = document.createElement("h2");
  const popupTitleText = document.createTextNode("Welcome");
  const popupBody = document.createElement("p");
  const popupBodyText = document.createTextNode("Welcome to Elzero Web School");
  const popupCloseBtn = document.createElement("span");
  popupCloseBtn.className = "close-btn";
  const popupCloseBtnText = document.createTextNode("X");
  popupTitle.appendChild(popupTitleText);
  popupBody.appendChild(popupBodyText);
  popupCloseBtn.appendChild(popupCloseBtnText);
  popupContainer.appendChild(popupTitle);
  popupContainer.appendChild(popupBody);
  popupContainer.appendChild(popupCloseBtn);
  document.body.appendChild(popupContainer);

  popupContainer.style.textAlign = "center";
  popupContainer.style.backgroundColor = "#cdcaca";
  popupContainer.style.width = "250px";
  popupContainer.style.margin = "auto";
  popupContainer.style.marginTop = "100px";
  popupContainer.style.border = "1px solid rgb(165 161 161)";
  popupContainer.style.position = "relative";

  popupCloseBtn.style.cssText = `
  display: block; 
  width: 30px; 
  height: 30px; 
  line-height:30px; 
  border-radius:50%; 
  background-color:red; 
  position:absolute; 
  top:-10px; 
  right:-10px;
`;

  document.addEventListener("click", (e) => {
    if (e.target.className === "close-btn") {
      e.target.parentElement.remove();
    }
  });
}
setTimeout(popup, 5000);



// Assignment 3:

let counterNumber = document.getElementById("counter-number");

function countDown() {
  counterNumber.textContent -= 1;

  if ( counterNumber.textContent === "0") {
    clearInterval(counter)
  }
}

let counter = setInterval(countDown, 1000);


/*
// Assignment 4:
let counterNumber = document.getElementById("counter-number");

function countDown() {
  counterNumber.textContent -= 1;

  if ( counterNumber.textContent === "5") {
    location.href = "http://www.elzero.org"
  }

  if ( counterNumber.textContent === "0") {
    clearInterval(counter)
  }
}

let counter = setInterval(countDown, 1000);
*/

/*
// Assignment 5:
let counterNumber = document.getElementById("counter-number");

function countDown() {
  counterNumber.textContent -= 1;

  if ( counterNumber.textContent === "5") {
    window.open("http://www.elzero.org", "_blank", "width=500, height500")
  }

  if ( counterNumber.textContent === "0") {
    clearInterval(counter)
  }
}

let counter = setInterval(countDown, 1000);
*/

/*
// Assignments For Lessons 102 To 110
*/
