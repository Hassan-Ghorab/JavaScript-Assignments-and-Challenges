// 101 - DOM Challenge
// Creating Logo
const logo = document.createElement("div");
const logoText = document.createTextNode("Logo");
logo.appendChild(logoText);

// Creating The links of the nav
const linksA1 = document.createElement("a");
const linksA2 = document.createElement("a");
const linksA3 = document.createElement("a");
const linksA4 = document.createElement("a");
const linksAHome = document.createTextNode("Home");
const linksAAbout = document.createTextNode("About");
const linksAService = document.createTextNode("Service");
const linksAContact = document.createTextNode("Contact");
linksA1.appendChild(linksAHome);
linksA2.appendChild(linksAAbout);
linksA3.appendChild(linksAService);
linksA4.appendChild(linksAContact);

const linksLi1 = document.createElement("li");
const linksLi2 = document.createElement("li");
const linksLi3 = document.createElement("li");
const linksLi4 = document.createElement("li");
linksLi1.appendChild(linksA1);
linksLi2.appendChild(linksA2);
linksLi3.appendChild(linksA3);
linksLi4.appendChild(linksA4);

const links = document.createElement("ul");
links.appendChild(linksLi1);
links.appendChild(linksLi2);
links.appendChild(linksLi3);
links.appendChild(linksLi4);

linksLi1.style.paddingRight = "20px";
linksLi2.style.paddingRight = "20px";
linksLi3.style.paddingRight = "20px";
links.style.cssText = `
display:flex; 
justify-content:space-between; 
align-items:center; 
list-style:none;
`;

// Creating the nav
const nav = document.createElement("div");
nav.appendChild(logo);
nav.appendChild(links);
nav.style.cssText = `
  display:flex; 
  justify-content:space-between; 
  align-items:center;
`;

// Creating the products
const product = document.createElement("div");
product.style.cssText = `display:grid; 
  justify-items:center; 
  grid-template-columns: 
  repeat(auto-fit, minmax(400px, 1fr)); 
  gap: 15px 45px; 
  padding: 20px; 
  background-color: #ddd;`;

for (let i = 0; i < 15; i++) {
  const number = document.createElement("span");
  const numberText = document.createTextNode(i + 1);
  number.appendChild(numberText);
  const productTitle = document.createElement("div");
  const productText = document.createTextNode("product");
  productTitle.appendChild(productText);

  const productContainer = document.createElement("div");
  productContainer.appendChild(number);
  productContainer.appendChild(productTitle);

  productContainer.style.cssText = `text-align: center; 
  background-color: white; 
  width: 100%;
  padding: 15px; 
  border-radius: 4px`;

  product.appendChild(productContainer);
}

// Creating footer
const footer = document.createElement("div");
const footerText = document.createTextNode("CopyRight 2023");
footer.appendChild(footerText);

footer.style.cssText = `text-align: center; 
background-color: green;
color: white;
width: 100%;
padding: 20px; 
border-radius: 4px`;

const container = document.createElement("div");
container.appendChild(nav);
container.appendChild(product);
container.appendChild(footer);
document.body.appendChild(container);

container.style.fontFamily = "Arial";
