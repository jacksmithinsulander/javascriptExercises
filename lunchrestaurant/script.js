let printLunch = document.getElementById("printLunch");

day = new Date().getDay();

var text;

switch(day) {
	case 1:
		text = "Tacos";
		break;
	case 2:
		text = "Pasta Pesto";
		break;
	case 3:
		text = "Pizza";
		break;
	case 4:
		text = "Vårullar";
		break;
	case 5:
		text = "Falafel";
		break;
	default:
		text = "Ingen lunch";
  }
printLunch.innerHTML = text;