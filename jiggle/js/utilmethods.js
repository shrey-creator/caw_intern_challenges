import { allKeyNode } from "./boolmethod.js";
import { getRandomKeyNumber } from "./getterMethod.js";

export const changeTargetKey = (keyNode) => {
  keyNode.classList.remove("jiggle");
  const randomNumber = getRandomKeyNumber();
  const randomKey = allKeyNode[randomNumber];
  randomKey.classList.add("jiggle");
};
