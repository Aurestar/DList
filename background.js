	chrome.browserAction.onClicked.addListener(function(tab) {
	  
	  chrome.tabs.executeScript({
		code: 'var src=document.getElementsByTagName("audio");var fileUrl=src[1].src;var title=document.querySelector(".footer-song-name").innerHTML;var author=document.querySelector(".footer-artist-name").innerHTML;author.substr(4, 2000);var fileName="";fileName.concat("_",author, "-", title, ".aac");var a = document.createElement("a");a.href = fileUrl;a.setAttribute("download", fileName);a.click();'
	  });
	});

	