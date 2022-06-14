function isEditingInProgress()
{
    
    let minuteNode=getMinuteNode();
    if(minuteNode.disabled)
    return false;
    return true;
}
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