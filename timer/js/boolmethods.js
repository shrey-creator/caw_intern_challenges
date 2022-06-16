import { getMinuteNode, getSeconds, getMinutes } from "./getterMethod.js";
import { timerButton } from "../index.js";

const isEditingInProgress = () => {
  let minuteNode = getMinuteNode();
  if (minuteNode.disabled) return false;
  return true;
};
const isTimeUp = () => {
  let minutesLeft = getMinutes();
  let secondsLeft = getSeconds();
  if (minutesLeft == 0 && secondsLeft == 0) {
    return true;
  }
  return false;
};
const isButtonTextStart = () => {
  let timerButtonText = timerButton.innerHTML;
  return timerButtonText == "start" ? true : false;
};
const areInputValid = (minutes, seconds, minuteNode) => {
  if (
    areTimingsInvalid(minutes, seconds) ||
    isInputNotZero(minutes, seconds, minuteNode) ||
    isInputInteger(minutes, seconds)
  ) {
    return false;
  }
  return true;
};
const areTimingsInvalid = (minutes, seconds) => {
  if (minutes > 59 || seconds > 59 || minutes < 0 || seconds < 0) return true;
  return false;
};
const isInputNotZero = (minutes, seconds, minuteNode) => {
  if (minutes == 0 && seconds == 0 && !minuteNode.disabled) {
    return true;
  }
  return false;
};

const isInputInteger = (minutes, seconds) => {
  if (isInputDecimal(minutes, seconds) && isInputNaN(minutes, seconds)) {
    return false;
  } else {
    return true;
  }
};
const isInputNaN = (minutes, seconds) => {
  if (!isNaN(minutes) && !isNaN(seconds)) return true;
  return false;
};
const isInputDecimal = (minutes, seconds) => {
  if( minutes.indexOf(".") === -1 && seconds.indexOf(".") === -1) {
    return true;
  }
  return false;
};

export {
  isEditingInProgress,
  isTimeUp,
  isButtonTextStart,
  isInputInteger,
  areInputValid,
};
