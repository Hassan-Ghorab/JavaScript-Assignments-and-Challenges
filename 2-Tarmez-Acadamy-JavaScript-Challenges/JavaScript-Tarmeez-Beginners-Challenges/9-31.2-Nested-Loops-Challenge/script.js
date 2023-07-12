
// 31.2- nested loops - challenge
for (let i = 1; i <= 12; i++) {
  document.querySelector(".result").innerHTML += `<h2>Multiplication Table of ${i}</h2>`
  for (let j = 1; j <= 12; j++) {
    document.querySelector(".result").innerHTML += `<h3>${i} * ${j} = ${i * j}</h3><br>`
  }
  document.querySelector(".result").innerHTML += `<hr>`
}
