let numToCheck = document.getElementById("numToCheck");
let numCheckBtn = document.getElementById("numCheckBtn");
let printResult = document.getElementById("printResult");

numCheckBtn.addEventListener("click", () => {
	if (numToCheck.value >= 18 && numToCheck.value < 65) {
		printResult.innerHTML = numToCheck.value + " is perfect";
	} else if (numToCheck.value < 18) {
		printResult.innerHTML = numToCheck.value + " is too young";
	} else if (numToCheck.value>= 65) {
		printResult.innerHTML = numToCheck.value + " is too old";
	} else {
		printResult.innerHTML = "Error, faulty characters";
	}
});