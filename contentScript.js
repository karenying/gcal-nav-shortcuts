const container = document.getElementsByClassName('rbGOge SeRypc');
const containerChildren = container[0].childNodes;

const leftArrow = containerChildren[1];
const rightArrow = containerChildren[2];

chrome.runtime.onMessage.addListener(function (request) {
    const { direction } = request;
    direction === 'left' ? leftArrow.click() : rightArrow.click();
});
