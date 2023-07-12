// 23.2- Loops with string challenge
const vowelLetters = ["a", "e", "i", "o", "u"];
const inputText = document.querySelector(".input-text");
const submit = document.querySelector(".submit-btn");
const result = document.querySelector(".result");
submit.addEventListener("click", (e) => {
  result.innerHTML = "";
  for (let char of inputText.value) {
    let lowerChar = char.toLowerCase();
    if (!vowelLetters.includes(lowerChar)) {
      result.innerHTML += `<h1>${char}</h1>`;
    }

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
    } else {
      result.innerHTML += `<h1>${char}</h1>`;
    }
  }

  inputText.value = "";
});
