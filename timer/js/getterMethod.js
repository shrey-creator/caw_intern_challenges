const getCircleNode = () => {
  const circleNode = document.querySelector('.ring');
  return circleNode;
};
const getMinuteNode = () => {
  const minutesDivNode = document.querySelector('.minutes');
  const minuteNode = minutesDivNode.children[0];
  return minuteNode;
};
const getSecondsNode = () => {
  const secondsDivNode = document.querySelector('.seconds');
  const secondNode = secondsDivNode.children[0];
  return secondNode;
};
const getErrorNode = () => {
  const errorNode = document.querySelector('#error');
  return errorNode;
};
const getMinutes = () => {
  const minuteNode = getMinuteNode();
  return minuteNode.value;
};
const getSeconds = () => {
  const secondNode = getSecondsNode();
  return secondNode.value;
};

export {
  getCircleNode,
  getMinuteNode,
  getSeconds,
  getErrorNode,
  getMinutes,
  getSecondsNode,
};
