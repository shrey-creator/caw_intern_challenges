const checkAllSelectedPodcast = (
  lastSelectedPodcast,
  currentSelectedPodcast
) => {
  const lastLabelNode = lastSelectedPodcast;
  const currentLabelNode = currentSelectedPodcast;

  const allPodcast = document.querySelectorAll("input");
  let start = Array.prototype.indexOf.call(allPodcast, lastLabelNode);
  let end = Array.prototype.indexOf.call(allPodcast, currentLabelNode);
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }
  while (start < end) {
    allPodcast[start].checked = true;
    start += 1;
  }
};
let lastSelectedPodcast;
export const changeLastSelectedPodcast = (event) => {
  const shiftKeyPressed = event.shiftKey;
  if (lastSelectedPodcast && shiftKeyPressed) {
    const currentSelectedPodcast = event.target;
    checkAllSelectedPodcast(lastSelectedPodcast, currentSelectedPodcast);
  }
  lastSelectedPodcast = event.target;
  if (!lastSelectedPodcast.checked) {
    lastSelectedPodcast = undefined;
  }
};
