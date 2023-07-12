/*
// Assignments For Lessons 111 To 114
*/

// Assignment 1:
const font = document.getElementById("font");
const color = document.getElementById("color");
const fontSizes = document.getElementById("font-size");

font.addEventListener("change", (e) => {
  localStorage.setItem("font", font.value);
  document.body.style.fontFamily = font.value;
});

color.addEventListener("change", (e) => {
  localStorage.setItem("color", color.value);
  document.body.style.backgroundColor = color.value;
});

fontSizes.addEventListener("change", (e) => {
  localStorage.setItem("fontSize", fontSizes.value);
  document.body.style.fontSize = fontSizes.value;
});

document.body.style.cssText = `
font-family: ${localStorage.getItem("font")}; 
background-color: ${localStorage.getItem("color")};
font-size: ${localStorage.getItem("fontSize")};
`;
font.value = localStorage.getItem("font");
color.value = localStorage.getItem("color");
fontSizes.value = localStorage.getItem("fontSize");

// Assignment 2:
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const select = document.getElementById("select");

one.addEventListener("blur", (e) => {
  sessionStorage.setItem("one", one.value);
});

two.addEventListener("blur", (e) => {
  sessionStorage.setItem("two", two.value);
});

three.addEventListener("blur", (e) => {
  sessionStorage.setItem("three", three.value);
});

select.addEventListener("change", (e) => {
  sessionStorage.setItem("select", select.value);
});

one.value = sessionStorage.getItem("one");
two.value = sessionStorage.getItem("two");
three.value = sessionStorage.getItem("three");
select.value = sessionStorage.getItem("select");

/*
// Assignments For Lessons 111 To 114
*/
