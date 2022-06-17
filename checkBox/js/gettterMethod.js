import { changeLastSelectedPodcast } from "./utilMethods.js";
export const getPodcastListNode = (podcastName, podcastId) => {
  let liNode = document.createElement("li");
  let podcastAttribute = getPodcastAttribute(podcastId);

  let labelNode = getPodcastLabelNode(podcastAttribute);
  let inputNode = getPodcastInputNode(podcastAttribute);
  let spanNode = getPodcastSpanNode(podcastName, podcastId);

  labelNode.appendChild(inputNode);
  labelNode.appendChild(spanNode);
  liNode.appendChild(labelNode);

  return liNode;
};
const getPodcastLabelNode = (podcastAttribute) => {
  let labelNode = document.createElement("label");
  labelNode.setAttribute("for", podcastAttribute);

  return labelNode;
};
const getPodcastInputNode = (podcastAttribute) => {
  let inputNode = document.createElement("input");
  inputNode.setAttribute("type", "checkbox");
  inputNode.setAttribute("name", podcastAttribute);
  inputNode.setAttribute("id", podcastAttribute);

  inputNode.addEventListener("click", changeLastSelectedPodcast);

  return inputNode;
};
const getPodcastSpanNode = (podcastName, podcastId) => {
  let spanNode = document.createElement("span");
  spanNode.textContent = `${podcastId} || ${podcastName}`;
  return spanNode;
};
const getPodcastAttribute = (podcastId) => {
  return `episode-` + podcastId;
};
