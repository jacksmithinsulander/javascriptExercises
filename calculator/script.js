let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let calculateBtn = document.getElementById("calculateBtn");
let printResult = document.getElementById("printResult");

let p = document.querySelector('#calc')

calculateBtn.addEventListener("click", () => {
	if (isNaN(num1.value) && isNaN(num2.value)) {
		printResult.innerHTML = "Error, faulty characters";
	} else {
		var a = Number(num1.value);
		var b = Number(num2.value);
		var result= eval(a + p.value + b);
		printResult.innerHTML = result;
	}
});