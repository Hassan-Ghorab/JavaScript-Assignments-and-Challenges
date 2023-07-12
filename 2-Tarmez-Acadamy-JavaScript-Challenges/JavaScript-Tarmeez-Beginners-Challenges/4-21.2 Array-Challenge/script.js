
// 21.2 Array Challenge
let names = [];
const input = document.getElementById("input-text");
const showNames = document.querySelector(".show-names");
const submitBtn = document.querySelector(".submit");
const deleteBtn = document.querySelector(".delete");

submitBtn.addEventListener("click", (e) => {
  names.push(input.value);
  showNames.textContent = names.join(" ");
  input.value = ""
});

deleteBtn.addEventListener("click", (e) => {
  names.pop()
  showNames.textContent = names.join(" ");
})
