let agents = [
	{
		"firstName": "James",
		"lastName": "Bond"		
	},
	{
		"firstName": "Kent",
		"lastName": "Agent"
	},
	{
		"firstName": "Johnny",
		"lastName": "English"
	},
	{
		"firstName": "Indiana",
		"lastName": "Jones"
	}
]

let checkAgentName = document.getElementById("checkAgentName");

let agentBtn = document.getElementById("agentBtn");

let printAgentName = document.getElementById("printAgentName");

let firstNameBtn = document.getElementById("firstNameBtn");

let agentFirstNames = document.getElementById("agentFirstNames");

agentBtn.addEventListener("click", () => {
	let agent = agents.find(agent => agent.firstName === checkAgentName.value);
	console.log("agent", agent)
	if (agent) {
		printAgentName.innerHTML = "His name is " + agent.lastName + ", "+ agent.firstName + " " + agent.lastName + ".";
	} else {
		printAgentName.innerHTML = "Person not found";
	}
})

firstNameBtn.addEventListener("click", () => {
	for (i in agents) {
		console.log("First name is", agents[i].firstName);
		agentFirstNames.insertAdjacentHTML("afterbegin", "<li>" + agents[i].firstName + "</li>");
	}
});
