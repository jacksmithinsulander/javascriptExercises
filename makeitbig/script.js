let textToMakeBig = document.getElementById("textToMakeBig");
let makeBigBtn = document.getElementById("makeBigBtn");

makeBigBtn.addEventListener("click", () => {
	textToMakeBig.value = textToMakeBig.value.toUpperCase();
});