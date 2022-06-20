const playAudio = (index) => () => {
  const audio = new Audio(`./audio/key-${index + 1}.mp3`);
  audio.play();
};
const addAudioToKeyboard = () => {
  const keyboardBtns = document.querySelectorAll('a');
  keyboardBtns.forEach((btn, index) => {
    btn.addEventListener('click', playAudio(index));
  });
};
addAudioToKeyboard();
