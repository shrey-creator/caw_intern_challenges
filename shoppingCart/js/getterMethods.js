import {decreaseQtyInCart, increaseQtyInCart} from './utilFunctions.js';

const menuItems = [
  {
    name: 'French Fries with Ketchup',
    price: 223,
    image: 'plate__french-fries.png',
    alt: 'French Fries',
    count: 0,
  },
  {
    name: 'Salmon and Vegetables',
    price: 512,
    image: 'plate__salmon-vegetables.png',
    alt: 'Salmon and Vegetables',
    count: 0,
  },
  {
    name: 'Spaghetti with Meat Sauce',
    price: 782,
    image: 'plate__spaghetti-meat-sauce.png',
    alt: 'Spaghetti with Meat Sauce',
    count: 0,
  },
  {
    name: 'Bacon, Eggs, and Toast',
    price: 599,
    image: 'plate__bacon-eggs.png',
    alt: 'Bacon, Eggs, and Toast',
    count: 0,
  },
  {
    name: 'Chicken Salad with Parmesan',
    price: 698,
    image: 'plate__chicken-salad.png',
    alt: 'Chicken Salad with Parmesan',
    count: 0,
  },
  {
    name: 'Fish Sticks and Fries',
    price: 634,
    image: 'plate__fish-sticks-fries.png',
    alt: 'Fish Sticks and Fries',
    count: 0,
  },
];
export const getCartItemDiv = (menuItemDetail) => {
  const listNode = document.createElement('li');

  // get plate div
  const plateDiv = getPlateDiv(menuItemDetail);

  // content div
  const contentDiv = getContentDiv(menuItemDetail);
  // qty wrapper div
  const qtyWrapperDiv = getQuatityWrapper(menuItemDetail);

  listNode.appendChild(plateDiv);
  listNode.appendChild(contentDiv);
  listNode.appendChild(qtyWrapperDiv);
  return listNode;
};
export const getMenuItemDiv = (event) => {
  const menuItem = event.target.parentNode.parentNode;
  return menuItem;
};
export const getMenuItemDetails = (menuItemName) => {
  let selectedMenuItemDetail = false;
  menuItems.forEach((item) => {
    if (item.name === menuItemName) {
      selectedMenuItemDetail = item;
    }
  });
  return selectedMenuItemDetail;
};

export const getPlateDiv = (menuItemDetail) => {
  const plateDiv = document.createElement('div');
  plateDiv.classList.add('plate');

  const dishImage = document.createElement('img');
  dishImage.src = 'images/' + menuItemDetail.image;

  const qtyPlateDiv = document.createElement('div');
  qtyPlateDiv.classList.add('quantity');

  qtyPlateDiv.appendChild(
      document.createTextNode(`${menuItemDetail.count + 1}`),
  );

  plateDiv.appendChild(dishImage);
  plateDiv.appendChild(qtyPlateDiv);

  return plateDiv;
};
export const getContentDiv = (menuItemDetail) => {
  const contentDivNode = document.createElement('div');
  contentDivNode.classList.add('content');

  const menuItemNode = document.createElement('p');
  menuItemNode.classList.add('menu-item');
  menuItemNode.appendChild(document.createTextNode(`${menuItemDetail.name}`));

  const priceNode = document.createElement('p');
  priceNode.classList.add('price');
  priceNode.appendChild(
      document.createTextNode('$' + `${menuItemDetail.price / 100}`),
  );

  contentDivNode.appendChild(menuItemNode);
  contentDivNode.appendChild(priceNode);

  return contentDivNode;
};
export const getDecreaseButton = () => {
  const decreaseBtn = document.createElement('button');
  decreaseBtn.classList.add('decrease');
  const decreaseImage = document.createElement('img');
  decreaseImage.src = 'images/chevron.svg';
  decreaseBtn.appendChild(decreaseImage);
  return decreaseBtn;
};
export const getIncreseButton = () => {
  const increaseBtn = document.createElement('button');
  increaseBtn.classList.add('increase');
  const increaseImage = document.createElement('img');
  increaseImage.src = 'images/chevron.svg';
  increaseBtn.appendChild(increaseImage);
  return increaseBtn;
};
export const getQuatityWrapper = (menuItemDetail) => {
  const qtyWrapperDiv = document.createElement('div');
  qtyWrapperDiv.classList.add('quantity__wrapper');

  const decreaseBtn = getDecreaseButton();
  decreaseBtn.onclick = decreaseQtyInCart;

  const qtyDiv = document.createElement('div');
  qtyDiv.classList.add('quantity');
  qtyDiv.appendChild(document.createTextNode(`${menuItemDetail.count + 1}`));

  const increaseBtn = getIncreseButton();
  increaseBtn.onclick = increaseQtyInCart;

  const subtotalDiv = document.createElement('div');
  subtotalDiv.classList.add('subtotal');

  subtotalDiv.appendChild(
      document.createTextNode('$ ' + `${menuItemDetail.price / 100}`),
  );

  qtyWrapperDiv.appendChild(decreaseBtn);
  qtyWrapperDiv.appendChild(qtyDiv);
  qtyWrapperDiv.appendChild(increaseBtn);
  qtyWrapperDiv.appendChild(subtotalDiv);
  return qtyWrapperDiv;
};
export const getBtnParentDiv = (event) => {
  let btnParentDiv = event.target.parentNode.parentNode;
  if (btnParentDiv.nodeName === 'DIV') btnParentDiv = btnParentDiv.parentNode;

  return btnParentDiv;
};

export const getCartItemPrice = (cartItemDiv) => {
  const cartItemPriceNode = cartItemDiv.querySelector('.price');
  const cartItemPrice = parseFloat(cartItemPriceNode.textContent.slice(1));
  return cartItemPrice;
};

export const getAddCartButton = () => {
  const addToCart = document.createElement('button');
  addToCart.classList.add('add');
  addToCart.appendChild(document.createTextNode('Add To Cart'));

  return addToCart;
};
export const getMenuItemToChange = (menuItemListNode, cartItemToRemove) => {
  let targetMenuItemNode = false;
  menuItemListNode.forEach((menuItemNode) => {
    const menuItemName = menuItemNode.querySelector('.menu-item').textContent;
    if (menuItemName === cartItemToRemove) {
      targetMenuItemNode = menuItemNode;
    }
  });
  return targetMenuItemNode;
};
