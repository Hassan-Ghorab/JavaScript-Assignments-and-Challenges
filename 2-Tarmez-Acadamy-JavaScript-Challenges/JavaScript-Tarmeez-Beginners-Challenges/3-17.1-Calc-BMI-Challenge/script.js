// 17.1-Calc BMI - Challenge
const bmiResult = document.getElementById("bmi");
const bmiCategory = document.getElementById("bmi-category");
const calcBtn = document.querySelector(".calc-btn");

calcBtn.addEventListener("click", (e) => {
  let weight = document.getElementById("weight");
  let height = document.getElementById("height");
  let bmi = weight.value / (height.value * height.value);

  bmiResult.textContent = `${Math.floor(bmi)} deg`;

  // switch (true) {
  //   case bmi < 18:
  //     bmiCategory.textContent = "Thin";
  //     break;
  //   case bmi < 24:
  //     bmiCategory.textContent = "Perfect";
  //     break;
  //   case bmi < 29:
  //     bmiCategory.textContent = "Overweight";
  //     break;
  //   case bmi < 34:
  //     bmiCategory.textContent = "Overweight First-deg";
  //     break;
  //   case bmi < 39:
  //     bmiCategory.textContent = "Overweight Second-deg";
  //     break;
  //   default:
  //     bmiCategory.textContent = "Serious Obesity";
  // }

  if (bmi < 18) {
    bmiCategory.textContent = "Thin";
  } else if (bmi < 24) {
    bmiCategory.textContent = "Perfect";
  } else if (bmi < 29) {
    bmiCategory.textContent = "Overweight";
  } else if (bmi < 34) {
    bmiCategory.textContent = "Overweight First-deg";
  } else if (bmi < 39) {
    bmiCategory.textContent = "Overweight Second-deg";
  } else {
    bmiCategory.textContent = "Serious Obesity";
  }

  weight.value = "";
  height.value = "";
});
