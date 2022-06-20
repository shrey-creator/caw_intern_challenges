import { changeTargetKey } from "./utilmethods.js";

export const allKeyNode = document.querySelectorAll(".key");

export const isRightKey = (keyNode, pressedKey) => {
  const keyValue = keyNode.getAttribute("data-key");
  const isTargetKey = keyNode.classList.contains("jiggle");
  if (isTargetKey && keyValue === pressedKey) return true;
  return false;
};

export const checkIfRightKeyPressed = (pressedKey) => {
  allKeyNode.forEach((keyNode) => {
    if (isRightKey(keyNode, pressedKey)) {
      changeTargetKey(keyNode);
    }
  });
};
