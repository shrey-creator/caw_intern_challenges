import  {isEditingInProgress,isTimeUp} from './js/boolmethods.js'
import  {decreaseTimerFields,toogleTimerButtonText,changeCircleToGreen,showErrorMessage, clearErrorMessage} from './js/utilMethods.js'
import {getSeconds,getMinutes} from './js/getterMethod.js'

let timerButton=document.querySelector(".start")
let isTimerOn=false;
let timerId=false;
const startStopTimer=()=>
{
    if(isTimerOn)
    {  
        isTimerOn=false;
        clearErrorMessage();
        clearInterval(timerId);
        toogleTimerButtonText(); 
    }
    else 
    {   if(isEditingInProgress())
        {
            showErrorMessage("Please complete edit and then start the timer")
        }
        else if(isTimeUp())
        {
            showErrorMessage("Time is up");
        }
        else if(!isTimeUp())
        {
            isTimerOn=true;             
            timerId=startTimer();       //TO ask:if we put var, timer does not stop
        }
    }
}

const startTimer=()=>
{
    toogleTimerButtonText();
    changeCircleToGreen();
    clearErrorMessage();
    let minutesLeft=getMinutes();
    let secondsLeft=getSeconds();
    var timerId=setInterval(decreaseTimerFields(minutesLeft,secondsLeft),1000);
    return timerId;
    
}


timerButton.addEventListener("click",startStopTimer);



export  {timerButton,timerId,isTimerOn,startStopTimer};






