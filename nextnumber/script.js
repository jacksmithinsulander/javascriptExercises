let numToCheck = document.getElementById("numToCheck");
let numCheckBtn = document.getElementById("numCheckBtn");
let printResult = document.getElementById("printResult");

numCheckBtn.addEventListener("click", () => {
	if (isNaN(numToCheck.value)) {
		printResult.innerHTML = "Error, faulty characters";
	} else {
		var a = Number(numToCheck.value);
		var result = a + 1;
		printResult.innerHTML = a + " + 1 is " +  result;
	}
});