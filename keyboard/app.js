
function playAudio(index){
    return function()
    {
    var audio = new Audio(`./audio/key-${index+1}.mp3`);
    audio.play();
    }
}
function addAudioToKeyboard()
{
    var keyboardBtns=document.querySelectorAll('a');
    keyboardBtns.forEach((btn,index)=>{
        btn.addEventListener("click",playAudio(index));
    })
}
addAudioToKeyboard()