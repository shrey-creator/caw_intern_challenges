import { isTimerOn } from "../index.js";
import { getMinuteNode, getSecondsNode } from "./getterMethod.js";
import {
  appendZeroBeforeMin,
  appendZeroBeforeSec,
  showErrorMessage,
  clearErrorMessage,
} from "./utilMethods.js";
import { areInputValid } from "./boolmethods.js";

let settingButton = document.querySelector(".settings");
const editTimerFields = () => {
  let minuteNode = getMinuteNode();
  let secondNode = getSecondsNode();
  if (isTimerOn) {
    showErrorMessage("Stop the timer to edit fields");
  } else if (areInputValid(minuteNode.value, secondNode.value, minuteNode)) {
    clearErrorMessage();
    minuteNode.disabled = minuteNode.disabled ? false : true;
    secondNode.disabled = secondNode.disabled === true ? false : true;
    minuteNode.value = appendZeroBeforeMin(minuteNode.value);
    secondNode.value = appendZeroBeforeSec(secondNode.value);
  } else {
    showErrorMessage("Input Fields are not valid");
  }
};

settingButton.addEventListener("click", editTimerFields);
