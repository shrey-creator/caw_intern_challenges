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