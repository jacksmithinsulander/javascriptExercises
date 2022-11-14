document.getElementById("body").addEventListener("click", myFunction, false);

function myFunction() {
	var x =document.getElementById("body");
	x.className = (x.className === "activate") ? "" : "activate";
};
