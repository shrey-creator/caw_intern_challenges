import {
  getCartItemDiv,
  getMenuItemDetails,
  getMenuItemDiv,
} from "./js/getterMethods.js";
import {
  changeAddToCartToInCart,
  changeCartSubTotal,
  removeEmptyCartMessage,
} from "./js/utilFunctions.js";
export const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 223,
    image: "plate__french-fries.png",
    alt: "French Fries",
    count: 0,
  },
  {
    name: "Salmon and Vegetables",
    price: 512,
    image: "plate__salmon-vegetables.png",
    alt: "Salmon and Vegetables",
    count: 0,
  },
  {
    name: "Spaghetti with Meat Sauce",
    price: 782,
    image: "plate__spaghetti-meat-sauce.png",
    alt: "Spaghetti with Meat Sauce",
    count: 0,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 599,
    image: "plate__bacon-eggs.png",
    alt: "Bacon, Eggs, and Toast",
    count: 0,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 698,
    image: "plate__chicken-salad.png",
    alt: "Chicken Salad with Parmesan",
    count: 0,
  },
  {
    name: "Fish Sticks and Fries",
    price: 634,
    image: "plate__fish-sticks-fries.png",
    alt: "Fish Sticks and Fries",
    count: 0,
  },
];

let addToCartBtn = document.querySelectorAll(".add");
export const pushToCart = (event) => {
  let selectMenuItemNode = getMenuItemDiv(event);
  let menuItemName = selectMenuItemNode.querySelector(".menu-item").textContent;
  let selectMenuItemDetail = getMenuItemDetails(menuItemName);
  let itemToAddCart = getCartItemDiv(selectMenuItemDetail);
  let cartDiv = document.querySelectorAll(".cart-summary")[0];

  changeAddToCartToInCart(selectMenuItemNode);
  changeCartSubTotal(itemToAddCart, "increase");
  removeEmptyCartMessage();

  cartDiv.appendChild(itemToAddCart);
};
export const addClickListenerToAddBtn = () => {
  addToCartBtn.forEach((addBtn) => {
    addBtn.addEventListener("click", pushToCart);
  });
};

addClickListenerToAddBtn();
