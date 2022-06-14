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
