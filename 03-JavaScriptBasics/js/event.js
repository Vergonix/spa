var button = document.getElementById("button");
var clickc = 0;

console.log(button);
button.addEventListener("click", function() {
	clicks++;
	console.log("you clicked button " + clicks + " times");
});