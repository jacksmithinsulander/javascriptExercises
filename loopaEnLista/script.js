let funStuffList = [ "Programmera", "Linux", "Crypto", "Musik", "Konst" ]

let myList = document.createElement("ul");

function isEven(element) {
	for (i in funStuffList) {
		if(i % 2 == 0) {
			console.log(funStuffList[i], "The number is even.");
			element.insertAdjacentHTML("afterbegin", "<li id='" + i +"'>" + funStuffList[i]  + "</li>");
		} else {
			console.log(funStuffList[i],"The number is odd");
			element.insertAdjacentHTML("afterbegin", "<li id='" + i +"'>" + funStuffList[i] + "</li>");
		}	
	}
	document.body.appendChild(element);	

}

isEven(myList);

for (j in funStuffList) {
	if(document.getElementById(j).id % 2 == 0){
		document.getElementById(j).style.backgroundColor = "red";
	} else {
		document.getElementById(j).style.backgroundColor = "blue";
	}
}