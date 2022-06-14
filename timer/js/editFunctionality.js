
var settingButton=document.querySelector(".settings");
settingButton.addEventListener('click',editTimerFields);
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