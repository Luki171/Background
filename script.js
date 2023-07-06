var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient-background");
var css = document.querySelector("h3");

body.style.background = "red";


// linear-gradient(to right, red, yellow);

function setBackground(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background ;
}

color1.addEventListener("input", setBackground)

color2.addEventListener("input", setBackground)

//color1.addEventListener("input", function(){
	//console.log(color1.value)
	//body.style.background = "linear-gradient(to right, "
						//+ color1.value
						//+ ", "
						//+ color2.value
						//+ ")";
//})

//color2.addEventListener("input", function(){
	//console.log(color2.value)
	//body.style.background = "linear-gradient(to right, "
						//+ color1.value
						//+ ", "
						//+ color2.value
						//+ ")";
//})
