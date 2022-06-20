import {changeLastSelectedPodcast} from './utilMethods.js';

const getPodcastLabelNode = (podcastAttribute) => {
  const labelNode = document.createElement('label');
  labelNode.setAttribute('for', podcastAttribute);

  return labelNode;
};
const getPodcastInputNode = (podcastAttribute) => {
  const inputNode = document.createElement('input');
  inputNode.setAttribute('type', 'checkbox');
  inputNode.setAttribute('name', podcastAttribute);
  inputNode.setAttribute('id', podcastAttribute);

  inputNode.addEventListener('click', changeLastSelectedPodcast);

  return inputNode;
};
const getPodcastSpanNode = (podcastName, podcastId) => {
  const spanNode = document.createElement('span');
  spanNode.textContent = `${podcastId} || ${podcastName}`;
  return spanNode;
};
const getPodcastAttribute = (podcastId) => 'episode-' + podcastId;

export const getPodcastListNode = (podcastName, podcastId) => {
  const liNode = document.createElement('li');
  const podcastAttribute = getPodcastAttribute(podcastId);

  const labelNode = getPodcastLabelNode(podcastAttribute);
  const inputNode = getPodcastInputNode(podcastAttribute);
  const spanNode = getPodcastSpanNode(podcastName, podcastId);

  labelNode.appendChild(inputNode);
  labelNode.appendChild(spanNode);
  liNode.appendChild(labelNode);

  return liNode;
};
