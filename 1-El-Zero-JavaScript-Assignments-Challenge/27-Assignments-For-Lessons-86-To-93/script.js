/*
// Assignments For Lessons 86 To 93
*/

/*
// Assignments 1:
const one = document.querySelector(".element");
const two = document.querySelector("#elzero");
const three = document.querySelector("div");
const four = document.querySelector("[name='js']");
const five = document.querySelectorAll(".element")[0];
const six = document.querySelectorAll("#elzero")[0];
const seven = document.querySelectorAll("[name='js']")[0];
const eight = document.querySelectorAll("div")[0];
const nine = document.getElementById("elzero");
const ten = document.getElementsByClassName("element")[0];
const eleven = document.getElementsByTagName("div")[0];
const twelve = document.getElementsByName("js")[0];
const thirteen = document.body.firstElementChild;
const fourteen = document.body.children[0];
const fifteen = document.body.childNodes[1];
*/

/*
// Assignments 2:
let imagesEl = document.images;

for (let i = 0; i < imagesEl.length; i++) {
  imagesEl[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  imagesEl[i].alt = "Elzero Logo";
  imagesEl[i].style = "background-color: blue"
}

*/

/*
// Assignments 3:
const input = document.querySelector("input");
const result = document.querySelector(".result");
input.addEventListener("input", (e) => {
  result.textContent = `${input.value} USD Dollar = ${(
    Number(input.value) * 31
  ).toFixed(2)} Egyptian Pound`;
});
*/

/*
// Assignments 4:
let elOne = document.querySelector(".one");
let elTwo = document.querySelector(".two");

elOne.title = elOne.className;
elOne.textContent = `${elOne.title.charAt(0).toUpperCase()}${elOne.title.slice(1)}`;

elTwo.title = elTwo.className;
elTwo.textContent = `${elTwo.title.charAt(0).toUpperCase()}${elTwo.title.slice(1)} ${elTwo.attributes.length}`;
*/

/*
// Assignments 5:
let imagesEl = document.querySelectorAll("img");
for (let i = 0; i < imagesEl.length; i++) {
  if (imagesEl[i].hasAttribute("alt")) {
    imagesEl[i].alt = "Old"
  } else {
    imagesEl[i].setAttribute("alt", "Elzero New")
  }
}
*/

/*
// Assignments 6:
let inputNumber = document.querySelector("[name=elements]");
let inputText = document.querySelector("[name=texts]");
let form = document.querySelector("form");
let typeOfSelect = document.querySelector("select");
let results = document.querySelector(".results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelectorAll(".box").forEach((el) => el.remove());

  for (let i = 1; i <= inputNumber.value; i++) {
    let newElement = document.createElement(typeOfSelect.value);
    let elementText = document.createTextNode(inputText.value);

    newElement.className = "box";
    newElement.title = "Element";
    newElement.id = `id-${i}`;

    newElement.appendChild(elementText);

    results.appendChild(newElement);
  }

  inputNumber.value = "";
  inputText.value = "";
});
*/

/*
// Assignments For Lessons 86 To 93
*/