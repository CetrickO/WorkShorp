// let age = prompt("What is your age?");

// if (age == 18) {
// 	alert("Can drive a small car");
// 	//console.log("Can drive a small car");
// }else if(age >= 18 && age <= 24) {
// 	alert("Can drive a small car");
// 	//console.log("Can drve a big car");
// }else if(age > 24) {
// 	alert("Can drive a small car");
// 	//console.log("Can drve a truck");
// }else {
// 	alert("Can drive a small car");
// 	//console.log("You can't drive!")
// }

// function drive(age) {
// 	if (age == 18) {
// 	alert("Can drive a small car");
// 	//console.log("Can drive a small car");
// 	}else if(age >= 18 && age <= 24) {
// 		alert("Can drive a small car");
// 		//console.log("Can drve a big car");
// 	}else if(age > 24) {
// 		alert("Can drive a small car");
// 		//console.log("Can drve a truck");
// 	}else {
// 		alert("You can't drive!");
// 		//console.log("You can't drive!")
// 	}
// }

// drive(age);

function drive(event) {
	event.preventDefault();
	let age = document.getElementById("age").value;

	if (age == 18) {
		document.getElementById("log").innerHTML ="Can drive a small car";
	}else if(age >= 18 && age <= 24) {
		document.getElementById("log").innerHTML ="Can drve a big car";
	}else if(age > 24) {
		document.getElementById("log").innerHTML ="Can drve a truck";
	}else {
		document.getElementById("log").innerHTML ="You can't drive!";
	}
}
