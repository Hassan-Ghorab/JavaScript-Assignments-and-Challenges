// 8.4- String Challenge

/* 
// Challenge 1:
  let message = "Hello world!";
  console.log(message);
  console.log(message.toUpperCase());
  console.log(message.replace("o", "y").toUpperCase());
  console.log(message.split("").reverse().join(""));

  // Challenge 2:
  const secondStringChallengeEl = document.querySelector(
    ".second-string-challenge"
  );

  const mainString = secondStringChallengeEl.textContent;
  const upperCasedString = mainString.toUpperCase();
  const replacedString = mainString.replace("o", "y").toUpperCase();
  const reversedString = mainString.split("").reverse().join("");

  const showInHTML = `
    <h2>${mainString}</h2>
    <h2>${upperCasedString}</h2>
    <h2>${replacedString}</h2>
    <h2>${reversedString}</h2>
    `;
  document.open();
  document.write(showInHTML);
  document.close(); 
*/

// Challenge 3:
const changeBtn = document.querySelector(".change-btn");
const inputText = document.querySelector(".input-text");
const result = document.querySelector(".result");

changeBtn.addEventListener("click", (e) => {
  const mainString = inputText.value;
  const upperCasedString = mainString.toUpperCase();
  const replacedString = mainString.toLowerCase();
  const reversedString = mainString.split("").reverse().join("");
  const showInHTML = `
  <h2>${mainString}</h2>
  <h2>${upperCasedString}</h2>
  <h2>${replacedString}</h2>
  <h2>${reversedString}</h2>
  `;
  result.innerHTML = showInHTML;

  inputText.value = "";
});
