import {
  getCartItemPrice,
  getBtnParentDiv,
  getMenuItemToChange,
  getAddCartButton,
  getMenuItemDetails,
  getMenuItemDiv,
  getCartItemDiv,
} from "./getterMethods.js";


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
export const changeAddToCartToInCart = (menuItemNode) => {
  let addToCartBtn = menuItemNode.querySelector(".add");
  addToCartBtn.innerHTML = "";
  let checkImg = document.createElement("img");
  checkImg.src = "images/check.svg";
  addToCartBtn.appendChild(checkImg);
  addToCartBtn.classList.remove("add");
  addToCartBtn.classList.add("in-cart");
  addToCartBtn.appendChild(document.createTextNode("In Cart"));
  addToCartBtn.removeEventListener("click", pushToCart);
};
export const changeCartItemTotal = (qtyInCart, cartItemDiv) => {
  let cartItemPrice = getCartItemPrice(cartItemDiv);
  let cartItemTotalNode = cartItemDiv.querySelector(".subtotal");
  let cartItemTotal = (qtyInCart * cartItemPrice).toFixed(2);
  cartItemTotalNode.textContent = "$ " + cartItemTotal;
};
export const changeCartSubTotal = (cartItemDiv, changePrice) => {
  let cartItemPrice = getCartItemPrice(cartItemDiv);

  let totalsDiv = document.querySelector(".totals");
  let subtotalNode = totalsDiv.querySelector(".subtotal");
  let subtotal = parseFloat(subtotalNode.textContent.slice(1));
  let taxNode = totalsDiv.querySelector(".tax");
  let totalNode = totalsDiv.querySelectorAll(".total")[1];
  if (changePrice == "increase") {
    subtotal = subtotal + cartItemPrice;
  } else subtotal = subtotal - cartItemPrice;
  subtotal = subtotal.toFixed(2);
  let tax = subtotal * 0.095;
  let total = (parseFloat(subtotal) + tax).toFixed(2);
  if (total == 0) {
    addEmptyCartMessage();
  }
  taxNode.textContent = "$" + tax.toFixed(2);
  subtotalNode.textContent = "$" + subtotal;
  totalNode.textContent = "$" + total;
};
export const decreaseQtyInCart = (event) => {
  let btnParentDiv = getBtnParentDiv(event);
  let qtyInCartNode = btnParentDiv.querySelectorAll(".quantity");
  let qtyInCart = parseInt(qtyInCartNode[0].textContent);
  changeCartSubTotal(btnParentDiv, "decrease");
  if (qtyInCart === 1) {
    removeItemFromCart(btnParentDiv);
    return;
  }
  changeCartItemTotal(qtyInCart - 1, btnParentDiv);
  qtyInCartNode[0].textContent = qtyInCart - 1;
  qtyInCartNode[1].textContent = qtyInCart - 1;
};
function removeItemFromCart(btnParentDiv) {
  let cart_summary = document.querySelector(".cart-summary");
  cart_summary.removeChild(btnParentDiv);
  addEventListenerToButton(btnParentDiv);
}
function addEventListenerToButton(btnParentDiv) {
  let cartItemNameToRemove =
    btnParentDiv.querySelector(".menu-item").textContent;
  let menuItemDiv = document.querySelector(".menu");
  let menuItemList = menuItemDiv.querySelectorAll(".content");
  let menuItemToChangeNode = getMenuItemToChange(
    menuItemList,
    cartItemNameToRemove
  );
  let addCartButton = getAddCartButton();
  addCartButton.addEventListener("click", pushToCart);
  let inCartBtn = menuItemToChangeNode.querySelector(".in-cart");

  menuItemToChangeNode.removeChild(inCartBtn);
  menuItemToChangeNode.appendChild(addCartButton);
}

export const increaseQtyInCart = (event) => {
  let btnParentDiv = getBtnParentDiv(event);
  let qtyInCartNode = btnParentDiv.querySelectorAll(".quantity");
  let qtyInCart = parseInt(qtyInCartNode[0].textContent);
  changeCartItemTotal(qtyInCart + 1, btnParentDiv);
  changeCartSubTotal(btnParentDiv, "increase");
  qtyInCartNode[0].textContent = qtyInCart + 1;
  qtyInCartNode[1].textContent = qtyInCart + 1;
};

export const removeEmptyCartMessage = () => {
  let emptyCartNode = document.querySelector(".empty");
  emptyCartNode.style.display = "none";
};
export const addEmptyCartMessage = () => {
  let emptyCartNode = document.querySelector(".empty");
  emptyCartNode.style.display = "block";
};
