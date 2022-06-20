import { pushToCart } from "./js/utilFunctions.js";

let addToCartBtn = document.querySelectorAll(".add");

const addClickListenerToAddBtn = () => {
  addToCartBtn.forEach((addBtn) => {
    addBtn.addEventListener("click", pushToCart);
  });
};

addClickListenerToAddBtn();
