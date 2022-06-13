

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
    {   
        if(!isTimeUp())
        {
        changeCircleToGreen()
        isTimerOn=true;             //if we put var timer does not stop
        toogleTimerButtonText(); 
        timerId=startTimer();
        }
    }
}

function startTimer()
{
    
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
function areInputValid(minutes,seconds)
{
    if(minutes>59 || seconds>59)
    return false;
    return true;

}

// methods to change
function decreaseTimerFields(minutesLeft,secondsLeft)
{
    return function()
    {
        if(minutesLeft==0 && secondsLeft==0)
        {
            changeCircleToRed();
            startStopTimer();

        }
        else{
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
}
function setTimerFields(minutesLeft,secondsLeft)
{
    
    let minuteNode=getMinuteNode();
    let secondNode=getSecondsNode();
    if(minutesLeft<=9)
        minutesLeft="0"+minutesLeft;
    if(secondsLeft<=9)
        secondsLeft="0"+secondsLeft;
    console.log(minutesLeft,secondsLeft)
    minuteNode.value=minutesLeft;
    secondNode.value=secondsLeft;
}
function editTimerFields()
{
    let minuteNode=getMinuteNode();
    let secondNode=getSecondsNode();
    if(areInputValid(minuteNode.value,secondNode.value))
    {
    clearErrorMessage();
    minuteNode.disabled=minuteNode.disabled==true?false:true;
    secondNode.disabled=secondNode.disabled==true?false:true;
    }
    else
    {
        showErrorMessage();
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
function changeCircleToRed()
{
    let circleNode=getCircleNode();
    circleNode.style.stroke='red';

}

function showErrorMessage()
{
    let errorNode=getErrorNode();
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