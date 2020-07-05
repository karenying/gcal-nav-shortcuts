const container = document.getElementsByClassName('rbGOge SeRypc');

if (container) {
    const containerChildren = container[0].childNodes;

    const leftArrow = containerChildren[1];
    const rightArrow = containerChildren[2];

    chrome.runtime.onMessage.addListener(function (message) {
        const { direction } = message;
        direction === 'left' ? leftArrow.click() : rightArrow.click();
    });
}
