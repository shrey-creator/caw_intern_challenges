import { isButtonTextStart } from "./boolmethods.js";
import {
  getCircleNode,
  getMinuteNode,
  getErrorNode,
  getSecondsNode,
} from "./getterMethod.js";
import { timerButton, startStopTimer } from "../index.js";

const decreaseTimerFields = (minutesLeft, secondsLeft) => {
  return function () {
    if (secondsLeft == 0) {
      minutesLeft = --minutesLeft;
      secondsLeft = 59;
    } else {
      --secondsLeft;
    }

    setTimerFields(minutesLeft, secondsLeft);
  };
};
const setTimerFields = (minutesLeft, secondsLeft) => {
  let minuteNode = getMinuteNode();
  let secondNode = getSecondsNode();

  minuteNode.value = appendZeroBeforeMin(minutesLeft);
  secondNode.value = appendZeroBeforeSec(secondsLeft);

  if (minutesLeft == 0 && secondsLeft == 0) {
    changeCircleToRed();
    startStopTimer();
  }
};
const appendZeroBeforeMin = (minutesLeft) => {
  minutesLeft = parseInt(minutesLeft);
  if (minutesLeft <= 9) minutesLeft = "0" + minutesLeft;
  return minutesLeft;
};
const appendZeroBeforeSec = (secondsLeft) => {
  secondsLeft = parseInt(secondsLeft);
  if (secondsLeft <= 9) secondsLeft = "0" + secondsLeft;
  return secondsLeft;
};
const toogleTimerButtonText = () => {
  timerButton.innerHTML = isButtonTextStart() ? "stop" : "start";
};

const changeCircleToGreen = () => {
  let circleNode = getCircleNode();
  circleNode.style.stroke = "#09A65A";
};
const changeCircleToRed = (callback) => {
  let circleNode = getCircleNode();
  circleNode.style.stroke = "red";
  setTimeout(() => alert("Time is up"), 0);
};

const showErrorMessage = (errorMessage) => {
  let errorNode = getErrorNode();
  errorNode.innerHTML = errorMessage;
  errorNode.style.display = "block";
};
const clearErrorMessage = () => {
  let errorNode = getErrorNode();
  errorNode.style.display = "none";
};

export {
  decreaseTimerFields,
  setTimerFields,
  appendZeroBeforeMin,
  appendZeroBeforeSec,
  toogleTimerButtonText,
  changeCircleToGreen,
  changeCircleToRed,
  showErrorMessage,
  clearErrorMessage,
};
