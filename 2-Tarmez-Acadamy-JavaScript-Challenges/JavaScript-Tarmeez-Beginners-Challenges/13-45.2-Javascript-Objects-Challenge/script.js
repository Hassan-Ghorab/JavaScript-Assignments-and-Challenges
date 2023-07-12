
// 45.2-Javascript Objects Challenge

let students = [
  {
    name: "Hassan",
    age: 22,
    country: "Egypt",
    goToSchool: function () {
      return "Go to school everyday";
    },
  },

  {
    name: "Adel",
    age: 55,
    country: "Egypt",
    goToSchool: function () {
      return "Go to school everyday";
    },
  },

  {
    name: "Hassan",
    age: 100,
    country: "Egypt",
    goToSchool: function () {
      return "Go to school everyday";
    },
  },

  {
    name: "Hussein",
    age: 200,
    country: "Egypt",
    goToSchool: function () {
      return "Go to school everyday";
    },
  },
];

const table = document.querySelector(".table");

for (let student of students) {
  table.innerHTML += `
  <tr>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.country}</td>
  </tr>
  `;
}
