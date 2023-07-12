// 22.2 Loops Challenge
const loopResult = document.querySelector(".multi-loop-result");
for (let i = 0; i <= 30; i++) {
  loopResult.innerHTML += `<p>10 * ${i} = ${i * 10}</p>`;
}
