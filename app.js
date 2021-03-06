function getDuration() {
var timeStamp = document.querySelectorAll('.timestamp span'),
	totalDurationInSeconds = 0,
	totalDuration,
	totalHours,
	totalMinutes,
	totalSeconds;
//Runs the loop and fetches the total duration in seconds
for (var i = 0; i < timeStamp.length; i++){
	var timeString = timeStamp[i].innerHTML;
	var HMS = timeString.split(':');
	if(HMS.length === 3){
	var hours = parseInt(HMS[0]),
		minutes = parseInt(HMS[1]),
		seconds = parseInt(HMS[2]),
		totalLoopSeconds = hours*3600 + minutes*60 + seconds;
		totalDurationInSeconds += totalLoopSeconds;
	}
	else{
	var
		minutes = parseInt(HMS[0]),
		seconds = parseInt(HMS[1]),
		totalLoopSeconds = minutes*60 + seconds;

		totalDurationInSeconds += totalLoopSeconds;
	}

}
//Converting Seconds to HH MM SS
function secondsToHMS(d) {
d = Number(d);
var h = Math.floor(d / 3600);
var m = Math.floor(d % 3600 / 60);
var s = Math.floor(d % 3600 % 60);
return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s); }

totalDuration = secondsToHMS(totalDurationInSeconds);

	return totalDuration;
}
	var parentElement = document.getElementById('masthead-appbar-container');
	var firstChildElement = parentElement.firstChild;
//Create div and style it
	function createDiv(){
	var timeStampDiv = document.createElement("div");
	var HMSDuration = getDuration();
	var textNodeText = document.createTextNode(HMSDuration);
	var headerPara = document.createElement("p");
	var headerText = document.createTextNode("Playlist Duration");
	var durationSpan = document.createElement("span");
	timeStampDiv.style.cssText = 'right: 0px; height: 32px;color: #767676; position: fixed; float: right; display: inline-block; z-index: 1; padding: 3px; text-align: center; border-radius: 2px; border-style: dotted; background-color: rgba(255, 255, 255, 0.74902);';
	timeStampDiv.onclick=function(){
	timeStampDiv.style.display = "none";
	};
	headerPara.appendChild(headerText);
	headerPara.style.cssText = 'font-weight: 500; color: #404040;';
	durationSpan.appendChild(textNodeText);
	timeStampDiv.appendChild(headerPara);
	timeStampDiv.appendChild(durationSpan);
	parentElement.insertBefore(timeStampDiv, firstChildElement);
	}
	createDiv();
//If "Load More" is clicked, recalculate and redraw
function loadMore(){
	var loadButton = document.querySelector('.load-more-button');
	if(loadButton != undefined){
			function replaceDiv(){
			var firstChildElement = parentElement.firstChild;
			parentElement.removeChild(firstChildElement);
			createDiv();
			//callback
			loadMore();
			}
	//Time-based function execution
	loadButton.addEventListener("click", function(){
		var docHeightNew = body.scrollHeight;
		intervalVar = setInterval(function(){
		var docHeightOld = body.scrollHeight;
			if(docHeightOld != docHeightNew){
				replaceDiv();
				clearInterval(intervalVar);
			}	
		}, 50);
		
	});
	};
	return;
}
loadMore();
