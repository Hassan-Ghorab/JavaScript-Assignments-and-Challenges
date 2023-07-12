
// 24.2-loops Arrays Challenge
const studentSearch = document.getElementById("student-search");
const searchBtn = document.querySelector(".search-btn");
const result = document.querySelector(".result");
const students = ["Ahmed", "Omar", "Mohammad", "Khalid", "Osama"];

searchBtn.addEventListener("click", (e) => {
  let searchValue = studentSearch.value.toLowerCase();
  let isStudentFound = false;

  for (let student of students) {
    let loweredCaseStudent = student.toLowerCase();
    if (searchValue === loweredCaseStudent) {
      isStudentFound = true;
    }
    // else {
    //   result.innerHTML = `${searchValue} is not in the school.`
    // }
  }

  if (isStudentFound === true) {
    result.innerHTML = `${searchValue} is in the school.`;
  } else {
    result.innerHTML = `${searchValue} is NOT in the school.`;
  }

  studentSearch.value = "";
});
