import { elementsList } from "./elementsList.js";

let productList = document.getElementById("product-list");

elementsList.map((element, key) => {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  let figcaption = document.createElement("figcaption");
  let productTitle = document.createElement("p");
  let productPrice = document.createElement("p");
  img.src = `assets/${element.src}`;
  productTitle.innerText = `${element.title}`;
  productPrice.innerText = `R$ ${element.price}`;
  figure.append(img);
  figcaption.append(productTitle, productPrice);
  figure.append(figcaption);
  productList.append(figure);
  console.log(element, key);
});
