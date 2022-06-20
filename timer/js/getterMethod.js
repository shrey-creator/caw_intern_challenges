const getCircleNode = () => {
  let circleNode = document.querySelector(".ring");
  return circleNode;
};
const getMinuteNode = () => {
  let minutesDivNode = document.querySelector(".minutes");
  let minuteNode = minutesDivNode.children[0];
  return minuteNode;
};
const getSecondsNode = () => {
  let secondsDivNode = document.querySelector(".seconds");
  let secondNode = secondsDivNode.children[0];
  return secondNode;
};
const getErrorNode = () => {
  let errorNode = document.querySelector("#error");
  return errorNode;
};
const getMinutes = () => {
  let minuteNode = getMinuteNode();
  return minuteNode.value;
};
const getSeconds = () => {
  let secondNode = getSecondsNode();
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
