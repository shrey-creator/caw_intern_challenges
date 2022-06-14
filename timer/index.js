

var timerButton=document.querySelector(".start")
var isTimerOn=false;
function startStopTimer()
{
    if(isTimerOn)
    {  
        isTimerOn=false;
        clearInterval(timerId)
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

function startTimer()
{
    toogleTimerButtonText();
    changeCircleToGreen()
    let minutesLeft=getMinutes();
    let secondsLeft=getSeconds();
    var timerId=setInterval(decreaseTimerFields(minutesLeft,secondsLeft),1000);
    return timerId;
    
}


timerButton.addEventListener("click",startStopTimer);








// Implement start feature
    //check if timer is on Stop
    //get Minutes and seconds of timer
    //use setInterval to start the timer
    //change Start text to STOP
// Implement stop feature
    //check if timer is on START
    //clear SET INterval
    // change stop text to start
//change timer length
//change red circle to green after timer reaches 0
//show alert message