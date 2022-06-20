import {isTimerOn, startStopTimer} from '../index.js';
import {getMinuteNode, getSecondsNode} from './getterMethod.js';
import {
  appendZeroBeforeMin,
  appendZeroBeforeSec,
  clearErrorMessage,
  changeCircleToGreen,
} from './utilMethods.js';
import {areInputValid} from './boolmethods.js';
const minuteNode = getMinuteNode();
const secondNode = getSecondsNode();
const settingButton = document.querySelector('.settings');
export const editTimerFields = () => {
  minuteNode.disabled = minuteNode.disabled ? false : true;
  secondNode.disabled = secondNode.disabled === true ? false : true;
  if (isTimerOn) {
    startStopTimer();
  }
};
export const checkInputField = () => {
  if (areInputValid(minuteNode.value, secondNode.value, minuteNode)) {
    saveTimerField(minuteNode.value, secondNode.value);
  } else {
    alert('Input Fields are not valid');
    saveTimerField(15, 0);
    return 0;
  }
  return 1;
};
export const saveTimerField = (minutesLeft, secondsLeft) => {
  clearErrorMessage();
  changeCircleToGreen();
  minuteNode.disabled = true;
  secondNode.disabled = true;
  minuteNode.value = appendZeroBeforeMin(minutesLeft);
  secondNode.value = appendZeroBeforeSec(secondsLeft);
};

settingButton.addEventListener('click', editTimerFields);
