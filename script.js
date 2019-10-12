var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function changeBC() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + "," +color2.value + ")";

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", changeBC);

color2.addEventListener("input",changeBC);

var h2 = document.querySelector("h2");

h2.addEventListener("click" , function(){
	h2.style.display = "none";
})


