import { elementsList } from "./elementsList.js";

let productList = document.getElementById("product-list");

elementsList.map((element, key) => {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  let figcaption = document.createElement("figcaption");
  let productTitle = document.createElement("p");
  let productPrice = document.createElement("p");

  figure.classList.add("product-card");
  img.classList.add("product-image");
  figcaption.classList.add("product-description");
  productTitle.classList.add("product-title");
  productPrice.classList.add("product-price");

  img.src = `assets/${element.src}`;
  productTitle.innerText = `${element.title}`;
  productPrice.innerHTML = `R$ <span>${element.price}</span> `;

  figure.append(img);
  figcaption.append(productTitle, productPrice);
  figure.append(figcaption);
  productList.append(figure);
});
