import {
  getCartItemPrice,
  getBtnParentDiv,
  getMenuItemToChange,
  getAddCartButton,
  getMenuItemDetails,
  getMenuItemDiv,
  getCartItemDiv,
} from './getterMethods.js';

export const pushToCart = (event) => {
  const selectMenuItemNode = getMenuItemDiv(event);
  const menuItemNode = selectMenuItemNode.querySelector('.menu-item');
  const menuItemName = menuItemNode.textContent;
  const selectMenuItemDetail = getMenuItemDetails(menuItemName);
  const itemToAddCart = getCartItemDiv(selectMenuItemDetail);
  const cartDiv = document.querySelectorAll('.cart-summary')[0];

  changeAddToCartToInCart(selectMenuItemNode);
  changeCartSubTotal(itemToAddCart, 'increase');
  removeEmptyCartMessage();

  cartDiv.appendChild(itemToAddCart);
};
export const changeAddToCartToInCart = (menuItemNode) => {
  const addToCartBtn = menuItemNode.querySelector('.add');
  addToCartBtn.innerHTML = '';
  const checkImg = document.createElement('img');
  checkImg.src = 'images/check.svg';
  addToCartBtn.appendChild(checkImg);
  addToCartBtn.classList.remove('add');
  addToCartBtn.classList.add('in-cart');
  addToCartBtn.appendChild(document.createTextNode('In Cart'));
  addToCartBtn.removeEventListener('click', pushToCart);
};
export const changeCartItemTotal = (qtyInCart, cartItemDiv) => {
  const cartItemPrice = getCartItemPrice(cartItemDiv);
  const cartItemTotalNode = cartItemDiv.querySelector('.subtotal');
  const cartItemTotal = (qtyInCart * cartItemPrice).toFixed(2);
  cartItemTotalNode.textContent = '$ ' + cartItemTotal;
};
export const changeCartSubTotal = (cartItemDiv, changePrice) => {
  const cartItemPrice = getCartItemPrice(cartItemDiv);

  const totalsDiv = document.querySelector('.totals');
  const subtotalNode = totalsDiv.querySelector('.subtotal');
  let subtotal = parseFloat(subtotalNode.textContent.slice(1));
  const taxNode = totalsDiv.querySelector('.tax');
  const totalNode = totalsDiv.querySelectorAll('.total')[1];
  if (changePrice == 'increase') {
    subtotal = subtotal + cartItemPrice;
  } else subtotal = subtotal - cartItemPrice;
  subtotal = subtotal.toFixed(2);
  const tax = subtotal * 0.095;
  const total = (parseFloat(subtotal) + tax).toFixed(2);
  if (total == 0) {
    addEmptyCartMessage();
  }
  taxNode.textContent = '$' + tax.toFixed(2);
  subtotalNode.textContent = '$' + subtotal;
  totalNode.textContent = '$' + total;
};
export const decreaseQtyInCart = (event) => {
  const btnParentDiv = getBtnParentDiv(event);
  const qtyInCartNode = btnParentDiv.querySelectorAll('.quantity');
  const qtyInCart = parseInt(qtyInCartNode[0].textContent);
  changeCartSubTotal(btnParentDiv, 'decrease');
  if (qtyInCart === 1) {
    removeItemFromCart(btnParentDiv);
    return;
  }
  changeCartItemTotal(qtyInCart - 1, btnParentDiv);
  qtyInCartNode[0].textContent = qtyInCart - 1;
  qtyInCartNode[1].textContent = qtyInCart - 1;
};
const removeItemFromCart = (btnParentDiv) => {
  const cartSummary = document.querySelector('.cart-summary');
  cartSummary.removeChild(btnParentDiv);
  addEventListenerToButton(btnParentDiv);
};
const addEventListenerToButton = (btnParentDiv) => {
  const cartItemNameToRemove =
    btnParentDiv.querySelector('.menu-item').textContent;
  const menuItemDiv = document.querySelector('.menu');
  const menuItemList = menuItemDiv.querySelectorAll('.content');
  const menuItemToChangeNode = getMenuItemToChange(
    menuItemList,
    cartItemNameToRemove,
  );
  const addCartButton = getAddCartButton();
  addCartButton.addEventListener('click', pushToCart);
  const inCartBtn = menuItemToChangeNode.querySelector('.in-cart');

  menuItemToChangeNode.removeChild(inCartBtn);
  menuItemToChangeNode.appendChild(addCartButton);
};

export const increaseQtyInCart = (event) => {
  const btnParentDiv = getBtnParentDiv(event);
  const qtyInCartNode = btnParentDiv.querySelectorAll('.quantity');
  const qtyInCart = parseInt(qtyInCartNode[0].textContent);
  changeCartItemTotal(qtyInCart + 1, btnParentDiv);
  changeCartSubTotal(btnParentDiv, 'increase');
  qtyInCartNode[0].textContent = qtyInCart + 1;
  qtyInCartNode[1].textContent = qtyInCart + 1;
};

export const removeEmptyCartMessage = () => {
  const emptyCartNode = document.querySelector('.empty');
  emptyCartNode.style.display = 'none';
};
export const addEmptyCartMessage = () => {
  const emptyCartNode = document.querySelector('.empty');
  emptyCartNode.style.display = 'block';
};
