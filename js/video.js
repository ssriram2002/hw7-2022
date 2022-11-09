var video = document.querySelector("#player1");
video.autoplay = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play()
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down video");
	video.playbackRate *=0.90;
	console.log("Speed is", video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up video");
	video.playbackRate *=10/9;
	console.log("Speed is", video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead");
	video.currentTime+= 10
	console.log("time is", video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute audio");
	if (video.muted== true){
	video.muted= false}
	else{
		video.muted=true
	};

})

document.querySelector("#slider").addEventListener("click", function(){
	slider.min = 0;
	slider.max = 100;
	video.volume = slider.value/100;
	console.log ('Volume is: ' + video.volume)
	document.querySelector("#volume").innerHTML = video.volume + 100 + "%"

})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	document.getElementById("player1").className = "video oldSchool";
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Old School");
	document.getElementById("player1").className = "video";
})