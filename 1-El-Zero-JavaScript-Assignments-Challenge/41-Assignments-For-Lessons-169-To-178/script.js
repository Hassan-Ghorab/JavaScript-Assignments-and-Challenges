/*
// Assignments For Lessons 169 To 178
*/

/*
// Assignment 1:
Json file articles.json
*/

/* 
// Assignment 2:
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onload = function () {
  if ((this.readyState === 4) & (this.status === 200)) {
    console.log(this.responseText);
    setTimeout(() => {
      console.log("Data Loaded");
    }, 0);
  }
};
 */

/* // Assignment 3:
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onload = function () {
  if ((this.readyState === 4) & (this.status === 200)) {
    let mainData = JSON.parse(this.responseText);

    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All";
    }
    console.log(mainData);
    console.log(typeof mainData);

    let updatedData = JSON.stringify(mainData);
  }
}; */

// Assignment 4:
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onload = function () {
  if ((this.readyState === 4) & (this.status === 200)) {
    let mainData = JSON.parse(this.responseText);

    let dataContainerDiv = document.createElement("div");
    dataContainerDiv.id = "data";
    document.body.appendChild(dataContainerDiv);

    for (let i = 0; i < mainData.length; i++) {
      let body = document.createElement("p");
      let bodyText = document.createTextNode(mainData[i].body);
      body.appendChild(bodyText);

      let author = document.createElement("p");
      let authorText = document.createTextNode(`Author: ${mainData[i].author}`);
      author.appendChild(authorText);

      let category = document.createElement("p");
      let categoryText = document.createTextNode(
        `Category: ${mainData[i].category}`
      );
      category.appendChild(categoryText);

      let title = document.createElement("h2");
      let titleText = document.createTextNode(mainData[i].title);
      title.appendChild(titleText);

      let dataContainer = document.createElement("div");

      dataContainer.appendChild(title);
      dataContainer.appendChild(body);
      dataContainer.appendChild(author);
      dataContainer.appendChild(category);

      dataContainerDiv.appendChild(dataContainer);
    }
  }
};

/*
// Assignments For Lessons 169 To 178
*/
