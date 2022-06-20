import {checkIfRightKeyPressed} from './js/boolmethod.js';

const onKeyPress = (event) => {
  const pressedKey = event.key.toUpperCase();
  checkIfRightKeyPressed(pressedKey);
};

document.addEventListener('keydown', onKeyPress);
