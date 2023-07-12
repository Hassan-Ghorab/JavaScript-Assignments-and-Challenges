
// 26.2-while loop Challenge
const studentSearch = document.getElementById("student-search");
const searchBtn = document.querySelector(".search-btn");
const result = document.querySelector(".result");
const students = ["Ahmed", "Omar", "Mohammad", "Khalid", "Osama"];

searchBtn.addEventListener("click", (e) => {
  let searchValue = studentSearch.value.toLowerCase();

  let studentIndex = 0;
  while (studentIndex < students.length) {
    let student = students[studentIndex];
    let loweredCaseStudent = student.toLowerCase();
    result.innerHTML = `${searchValue} is NOT in the school.`;

    studentIndex++;

    if (searchValue !== loweredCaseStudent) {
      continue;
    }

    result.innerHTML = `${searchValue} is in the school.`;
    break;
  }

  studentSearch.value = "";
});
