// 38.2- Anonymous Functions Callback - Challenge
const changeColorBtn = document.querySelector(".change-color");

function randomNumberRGB() {
  return Math.floor(Math.random() * 255);
}

changeColorBtn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 360);
  document.body.style.backgroundColor = `hsl(${randomNumber}, 100%, 50%)`;
  changeColorBtn.style.backgroundColor = `rgb(${randomNumberRGB()},${randomNumberRGB()}, ${randomNumberRGB()})`;
});

setInterval(function () {
  let randomNumberHSLOne = Math.floor(Math.random() * 360);
  let randomNumberHSLTwo = Math.floor(Math.random() * 100);
  let randomNumberHSLThree = Math.floor(Math.random() * 80);
  document.body.style.backgroundColor = `hsl(${randomNumberHSLOne}, ${randomNumberHSLTwo}%, ${randomNumberHSLThree}%)`;
}, 10000);
