

let timerButton=document.querySelector(".start")
let settingButton=document.querySelector(".settings")
let isTimerOn=false;
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
function isEditingInProgress()
{
    
    let minuteNode=getMinuteNode();
    if(minuteNode.disabled)
    return false;
    return true;
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

// boolean methods
function isTimeUp()
{   
    let minutesLeft=getMinutes();
    let secondsLeft=getSeconds();
    if((minutesLeft==0 && secondsLeft==0))
    {
        return true;
    }
    return false;
}
function isButtonTextStart()
{
    
    let timerButtonText=timerButton.innerHTML;
    return timerButtonText=="start"?true:false;
}
function areInputValid(minutes,seconds,minuteNode)
{
    if(minutes>59 || seconds>59 || minutes<0 || seconds<0 ||(minutes==0 && seconds==0 && !minuteNode.disabled)|| !isInputInteger(minutes,seconds))
    return false;
    return true;

}

function isInputInteger(minutes,seconds)
{
    if (minutes.indexOf('.') === -1 && seconds.indexOf('.')===-1 && !isNaN(minutes) && !isNaN(seconds)) {
        return true;
      } else {
        return false;
      }
}

// methods to change
function decreaseTimerFields(minutesLeft,secondsLeft)
{
    return function()
    {
    
        if(secondsLeft==0)
        {
            minutesLeft=--minutesLeft;
            secondsLeft=59;
        }
        else
        {
            --secondsLeft;
        }
    
        setTimerFields(minutesLeft,secondsLeft);
    
    }
}
function setTimerFields(minutesLeft,secondsLeft)
{
    
    
    let minuteNode=getMinuteNode();
    let secondNode=getSecondsNode();
    
    minuteNode.value=appendZeroBeforeMin(minutesLeft);
    secondNode.value=appendZeroBeforeSec(secondsLeft);
    
    if(minutesLeft==0 && secondsLeft==0)
    {
        changeCircleToRed();
        startStopTimer();

    }
}
function appendZeroBeforeMin(minutesLeft)
{
    minutesLeft=parseInt(minutesLeft);
    if(minutesLeft<=9)
        minutesLeft="0"+minutesLeft;
    return minutesLeft;
    

}
function appendZeroBeforeSec(secondsLeft)
{
    secondsLeft=parseInt(secondsLeft);
    if(secondsLeft<=9)
        secondsLeft="0"+secondsLeft;
    return secondsLeft;
}
function editTimerFields()
{
    let minuteNode=getMinuteNode();
    let secondNode=getSecondsNode();
    if(isTimerOn){
        showErrorMessage("Stop the timer to edit fields")
    }
    else if(areInputValid(minuteNode.value,secondNode.value,minuteNode) )
    {
    clearErrorMessage();
    minuteNode.disabled=minuteNode.disabled==true?false:true;
    secondNode.disabled=secondNode.disabled==true?false:true;
    minuteNode.value=appendZeroBeforeMin(minuteNode.value);
    secondNode.value=appendZeroBeforeSec(secondNode.value)
    }
    else
    {
       
        showErrorMessage("Input Fields are not valid");
    }   
}

function toogleTimerButtonText()
{
    timerButton.innerHTML=isButtonTextStart()?"stop":"start";
}

function changeCircleToGreen()
{
    let circleNode=getCircleNode();
    circleNode.style.stroke='#09A65A';
}
function changeCircleToRed(callback)
{
    let circleNode=getCircleNode();
    circleNode.style.stroke='red';
    setTimeout(() => alert("Time is up"), 0);
}

function showErrorMessage(errorMessage)
{
    let errorNode=getErrorNode();
    errorNode.innerHTML=errorMessage;
    errorNode.style.display="block";
}
function clearErrorMessage()
{
    let errorNode=getErrorNode();
    errorNode.style.display="none";
}
// getter methods
function getCircleNode()
{
    let circleNode=document.querySelector(".ring");
    return circleNode;

}
function getMinuteNode()
{
    let minutesDivNode=document.querySelector(".minutes");
    let minuteNode=minutesDivNode.children[0];
    return minuteNode;

}
function getSecondsNode()
{
    
    let secondsDivNode=document.querySelector(".seconds");
    let secondNode=secondsDivNode.children[0];
    return secondNode;

}
function getErrorNode()
{   
    
    let errorNode=document.querySelector("#error");
    return errorNode;
}
function getMinutes()
{   
    let minuteNode=getMinuteNode();
    return minuteNode.value;
}
function getSeconds()
{
    let secondNode=getSecondsNode();
    return secondNode.value; 
}


timerButton.addEventListener("click",startStopTimer);
settingButton.addEventListener('click',editTimerFields);








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