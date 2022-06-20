import {isButtonTextStart} from './boolmethods.js';
import {
  getCircleNode,
  getMinuteNode,
  getErrorNode,
  getSecondsNode,
} from './getterMethod.js';
import {timerButton, startStopTimer} from '../index.js';

const decreaseTimerFields = (minutesLeft, secondsLeft) => {
  return function() {
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
  const minuteNode = getMinuteNode();
  const secondNode = getSecondsNode();

  minuteNode.value = appendZeroBeforeMin(minutesLeft);
  secondNode.value = appendZeroBeforeSec(secondsLeft);

  if (minutesLeft == 0 && secondsLeft == 0) {
    changeCircleToRed();
    startStopTimer();
  }
};
const appendZeroBeforeMin = (minutesLeft) => {
  minutesLeft = parseInt(minutesLeft);
  if (minutesLeft <= 9) minutesLeft = '0' + minutesLeft;
  return minutesLeft;
};
const appendZeroBeforeSec = (secondsLeft) => {
  secondsLeft = parseInt(secondsLeft);
  if (secondsLeft <= 9) secondsLeft = '0' + secondsLeft;
  return secondsLeft;
};
const toogleTimerButtonText = () => {
  timerButton.innerHTML = isButtonTextStart() ? 'stop' : 'start';
};

const changeCircleToGreen = () => {
  const circleNode = getCircleNode();
  circleNode.style.stroke = '#09A65A';
};
const changeCircleToRed = (callback) => {
  const circleNode = getCircleNode();
  circleNode.style.stroke = 'red';
  setTimeout(() => alert('Time is up'), 0);
};

const showErrorMessage = (errorMessage) => {
  const errorNode = getErrorNode();
  errorNode.innerHTML = errorMessage;
  errorNode.style.display = 'block';
};
const clearErrorMessage = () => {
  const errorNode = getErrorNode();
  errorNode.style.display = 'none';
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
