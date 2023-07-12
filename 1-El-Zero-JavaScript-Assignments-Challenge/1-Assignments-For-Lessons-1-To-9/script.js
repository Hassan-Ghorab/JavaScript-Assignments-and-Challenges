/*
// Assignments For Lessons 1 To 9
*/

/*
// Assignment 1:
// write a Multiple Lines comment of which code is not going to work and why?

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script>
      // Code One
      document.getElementById("el").style.color = "red";
    </script>
    <script>
      // Code Two
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      // Code Three
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>

// The First code is not going to work
// the window still didn't load
// but the other code are going to work
// the other code work after the page lod
*/

/*
// Assignment 2:
// write h1 and put it in the html page with those style 
// color: blue;
// font-size: 80px;
// font-weight: bold;
// text-align: center;
// font-family: Arial
document.open()
document.write("<h1>Hello world</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
*/

/*
// Assignment 3:
// console.log(Elzero Web School with red green blue color, font 40px, make web bold);
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size: 40px;",
  "color:green; font-size: 40px; font-weight: bold;",
  "background-color:blue; color:white; font-size: 40px;"
);
*/

/*
// Assignment 4:
// console.group
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
*/

/*
// Assignment 5:
// console.Table
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);
*/

{
  // Assignment 6:
  // Make the code stop running without changing anything in it
  // Do that in two ways
  // First way
  /*
console.log("Iam In Console");
document.write("Iam In Page");
*/
  // Second way
  // console.log("Iam In Console");
  // document.write("Iam In Page");
}

/*
// Assignments For Lessons 1 To 9
*/