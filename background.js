chrome.action.onClicked.addListener(() => {
	chrome.tabs.create({ url: "chrome://downloads" })
});
