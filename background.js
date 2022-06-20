



	chrome.browserAction.onClicked.addListener(function(tab) {
	  
	  chrome.tabs.executeScript({
		code: 'var src=document.getElementsByTagName("audio"); var load=src[1].src; location.href = load;'
	  });
	  
	  
	});