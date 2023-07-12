/*
// Assignments For Lessons 94 To 100
*/

/*
// Assignment 1:
// You will find the solution in the html file in the script tag
*/


// Assignment 2:

let addElement = document.querySelector(".classes-to-add");
let removeElement = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector("[title = Current]");
let classesElement = document.querySelector(".classes-list div");

function addRemoveElements() {
  document.querySelectorAll("span").forEach((span) => span.remove());

  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (addElement.value) 
      currentElement.classList.add(
        addElement.value.toLowerCase().trim().split(" ")[i]
      );
    
    if (removeElement.value) 
      currentElement.classList.remove(
        removeElement.value.toLowerCase().trim().split(" ")[i]
      );
    
  }

  this.value = "";

  let spanClass;

  if (currentElement.classList.length) {
    [...currentElement.classList].sort().forEach((item) => {
      spanClass = document.createElement("span");
      spanClass.textContent = item;
      classesElement.append(spanClass);
    });
  } else {
    spanClass = document.createElement("span");
    spanClass.textContent = "No classes to show!";
  }
}

addElement.onblur = addRemoveElements;
removeElement.onblur = addRemoveElements;



// Assignment 3:
let p = document.getElementsByTagName("p")[0];
let div = document.querySelector(".our-element");
let firstDiv = div.cloneNode();
let lastDiv = div.cloneNode();

p.remove()

function addAttributes(el, index) {
  el.className = index.toLowerCase();
  el.title = `${index} element`;
  el.setAttribute = ("data-value", index);
  el.textContent = index;
}
addAttributes(firstDiv, "Start");
addAttributes(lastDiv, "End");

div.before(firstDiv);
div.after(lastDiv);



// Assignment 4:
let elzeroDiv = document.getElementsByTagName("div")[0];
console.log(elzeroDiv.lastChild.nodeValue.trim())

// Assignment 5:
([...document.body.children].forEach((ele) => {
  ele.addEventListener("click", () => {
    console.log(`This is ${ele.localName}`)
  });
}))


/*
// Assignments For Lessons 94 To 100
*/
