import { checkIfRightKeyPressed } from "./js/boolmethod.js";
const onKeyPress = (event) => {
  let pressedKey = event.key.toUpperCase();
  checkIfRightKeyPressed(pressedKey);
};

document.addEventListener("keydown", onKeyPress);
