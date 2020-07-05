chrome.commands.onCommand.addListener(function (command) {
    const direction = command.split('-')[1];

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { direction });
    });
});
