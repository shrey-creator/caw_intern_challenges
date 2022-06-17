
import { changeTargetKey } from "./utilmethods.js";


export let allKeyNode = document.querySelectorAll(".key");

export const checkIfRightKeyPressed = (pressedKey) => {
    allKeyNode.forEach((keyNode) => {
      if (isRightKey(keyNode, pressedKey)) {
        changeTargetKey(keyNode);
      }
    });
  };

  export const isRightKey = (keyNode, pressedKey) => {
    let keyValue = keyNode.getAttribute("data-key");
    let isTargetKey = keyNode.classList.contains("jiggle");
    if (isTargetKey && keyValue === pressedKey) return true;
    return false;
  };