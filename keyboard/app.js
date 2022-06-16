const playAudio = (index) => {
  return () => {
    var audio = new Audio(`./audio/key-${index + 1}.mp3`);
    audio.play();
  };
};
const addAudioToKeyboard = () => {
  var keyboardBtns = document.querySelectorAll("a");
  keyboardBtns.forEach((btn, index) => {
    btn.addEventListener("click", playAudio(index));
  });
};
addAudioToKeyboard();
