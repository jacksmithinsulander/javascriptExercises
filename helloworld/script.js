let elements = [
	{
		"elementType": "h1",
		"elementText": "Hello World"
	},
	{
		"elementType": "h1",
		"elementText": "Jack Smith Insulander"
	},	
	{
		"elementType": "p",
		"elementText": "I am a 26 year old blockchain developer from Stockholm. In my free time my biggest hobbies are making music, learning about finance and technology and making art"
	},
	{
		"elementType": "strong",
		"elementText": "these are my skills:"
	},
	{
		"elementType": "ul",
		"elementList": ["Deep linux knowlage, I use devuan btw", "Technical analysis of pricedata", "Addicted to learning"]
	}
]

for (i in elements) {
	if (elements[i].elementText) {
		let elementName = document.createElement(elements[i].elementType);
		elementName.innerText = elements[i].elementText;
		document.body.appendChild(elementName);
	} else {
		console.log(elements.elementType)
		let elementName = document.createElement(elements[i].elementType);
		for (list in elements[i].elementList) {
			elementName.insertAdjacentHTML("afterbegin", "<li>" + elements[i].elementList[list] + "</li>");
		}
		document.body.appendChild(elementName);
	}
}
console.log("hello world");