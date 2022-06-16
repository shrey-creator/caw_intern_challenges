import { allKeyNode } from '../index.js';
import {getRandomKeyNumber} from './getterMethod.js';
export const changeTargetKey = (keyNode) => {
    keyNode.classList.remove("jiggle");
    let randomNumber = getRandomKeyNumber();
    let randomKey = allKeyNode[randomNumber];
    randomKey.classList.add("jiggle");
  };

  
