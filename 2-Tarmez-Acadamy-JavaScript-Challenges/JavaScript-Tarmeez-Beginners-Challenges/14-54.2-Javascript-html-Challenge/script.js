// 54.2- javascript html - Challenge
const container = document.querySelector(".container");
const inputText = document.getElementById("input-text");
const inputTextValue = document.querySelector(".input-text-value");
const result = document.querySelector(".result");
const sendBtn = document.querySelector(".send");

inputText.addEventListener("change", (e) => {
  inputTextValue.textContent = inputText.value;
});

const h2Temp = document.createElement("h2");
const text = document.createTextNode("Please enter a name");
h2Temp.appendChild(text);
result.appendChild(h2Temp);

h2Temp.addEventListener("mouseover", (e) => {
  h2Temp.style.backgroundColor = "red";
});

h2Temp.addEventListener("mouseout", (e) => {
  h2Temp.style.backgroundColor = "white";
});

sendBtn.addEventListener("click", (e) => {
  h2Temp.remove();
  const h2 = document.createElement("h2");
  const text = document.createTextNode(inputText.value);
  h2.appendChild(text);
  result.appendChild(h2);

  h2.addEventListener("mouseover", (e) => {
    h2.style.backgroundColor = "green";
  });

  h2.addEventListener("mouseout", (e) => {
    h2.style.backgroundColor = "white";
  });
});
