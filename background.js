chrome.browserAction.onClicked.addListener(function(tab) {
	
	chrome.tabs.executeScript({
	code: 'var src=document.getElementsByTagName("audio");var fileUrl=src[1].src;var title=document.querySelector(".footer-song-name").innerHTML;var author=document.querySelector(".footer-artist-name").innerHTML;author=author.substr(4, 2000);var fileName="";fileName=fileName.concat("_",author, "-", title, ".aac");var element = document.createElement("a");element.setAttribute("href","data:text/plain;charset=utf-8, " + encodeURIComponent(fileUrl));element.setAttribute("download", fileName);document.body.appendChild(element);element.click();'
	});
});
	