chrome.browserAction.onClicked.addListener(function(tab) {
	
	chrome.tabs.executeScript({
		code: 'const audioTag = document.querySelector("audio"); const audioSrc = audioTag.src;window.open(audioSrc);'
	});
});