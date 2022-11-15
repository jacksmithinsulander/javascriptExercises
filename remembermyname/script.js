let nameToRemember = document.getElementById("nameToRemember");
let rememberBtn = document.getElementById("rememberBtn");
let purgeBtn = document.getElementById("purgeBtn");
let printRememberedName = document.getElementById("printRememberedName");

rememberBtn.addEventListener("click", () => {
	localStorage.name = nameToRemember.value;
	printRememberedName.innerHTML = localStorage.name;
});

purgeBtn.addEventListener("click", () => {
	localStorage.removeItem("name");
	printRememberedName.innerHTML = "";
});

printRememberedName.innerHTML = localStorage.getItem("name");