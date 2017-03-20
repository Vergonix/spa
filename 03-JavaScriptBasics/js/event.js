var clicks = 0;

var button = document.getElementById("button");

button.addEventListener("click", function() {
    clicks++;
	console.log("you clicked button " + clicks + " times");
});