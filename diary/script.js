const entryForm = document.querySelector("#entryForm");
const entryResultsSection = document.querySelector("#entryResultsSection");
const entryResultRow = document.querySelector("#entryResultRow");
const getEntryTitle = document.getElementById("getEntryTitle");
const getEntryText = document.getElementById("getEntryText");
let formDate = document.getElementById("date");


var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = yyyy + '-'+ mm + '-' + dd;

formDate.value = today;

function addEntryToDom(event) {
	event.preventDefault();

        // Adding Div
        const entryDiv = document.createElement("div");
        entryResultRow.appendChild(entryDiv);

        // Adding Div Element h3
        const entryHeading = document.createElement("h2");
        entryHeading.textContent = getEntryTitle.value;
        entryDiv.appendChild(entryHeading);

        // Adding Div Element Date

        const entryDate = document.createElement(`p`);
        if ((getEntryTitle.value = getEntryTitle.value)) {
                entryDate.textContent = formDate.value;
                entryDiv.appendChild(entryDate);
        }

        // Adding Div Element paragraph

        const entryParagraph = document.createElement(`p`);
        entryParagraph.textContent = getEntryText.value;
        entryDiv.appendChild(entryParagraph);
        getEntryText.value = ``;
}

entryForm.addEventListener(`submit`, addEntryToDom);
