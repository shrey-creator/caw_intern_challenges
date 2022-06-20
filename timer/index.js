import {isEditingInProgress, isTimeUp} from './js/boolmethods.js';
import {
  decreaseTimerFields,
  toogleTimerButtonText,
  changeCircleToGreen,
  clearErrorMessage,
} from './js/utilMethods.js';
import {checkInputField, saveTimerField} from './js/editFunctionality.js';
import {getSeconds, getMinutes} from './js/getterMethod.js';

const timerButton = document.querySelector('.start');
let isTimerOn = false;
let timerId = false;
const startStopTimer = () => {
  if (isTimerOn) {
    isTimerOn = false;
    clearErrorMessage();
    clearInterval(timerId);
    toogleTimerButtonText();
  } else {
    if (isTimeUp()) {
      alert('Time is up');
      saveTimerField(15, 0);
    } else if (isEditingInProgress()) {
      if (checkInputField()) {
        timerId = startTimer();
      }
    } else {
      timerId = startTimer();
    }
  }
};

const startTimer = () => {
  isTimerOn = true;
  toogleTimerButtonText();
  changeCircleToGreen();
  clearErrorMessage();
  const minutesLeft = getMinutes();
  const secondsLeft = getSeconds();
  const timerId = setInterval(
      decreaseTimerFields(minutesLeft, secondsLeft),
      1000,
  );
  return timerId;
};

timerButton.addEventListener('click', startStopTimer);

export {timerButton, timerId, isTimerOn, startStopTimer};
