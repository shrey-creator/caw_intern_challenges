import {pushToCart} from './js/utilFunctions.js';

const addToCartBtn = document.querySelectorAll('.add');

const addClickListenerToAddBtn = () => {
  addToCartBtn.forEach((addBtn) => {
    addBtn.addEventListener('click', pushToCart);
  });
};

addClickListenerToAddBtn();
