import { allPodcast } from "../index.js";
let lastSelectedPodcast;

export const changeLastSelectedPodcast = (event) => {
  let shiftKeyPressed = event.shiftKey;
  if (lastSelectedPodcast && shiftKeyPressed) {
    let currentSelectedPodcast = event.target;
    checkAllSelectedPodcast(lastSelectedPodcast, currentSelectedPodcast);
  }
  lastSelectedPodcast = event.target;
  if (!lastSelectedPodcast.checked) {
    lastSelectedPodcast = undefined;
  }
};

const checkAllSelectedPodcast = (
  lastSelectedPodcast,
  currentSelectedPodcast
) => {
  let lastLabelNode = lastSelectedPodcast;
  let currentLabelNode = currentSelectedPodcast;

  let start = Array.prototype.indexOf.call(allPodcast, lastLabelNode);
  let end = Array.prototype.indexOf.call(allPodcast, currentLabelNode);
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  console.log(allPodcast[start]);
  while (start < end) {
    allPodcast[start].checked = true;
    start++;
  }
};
