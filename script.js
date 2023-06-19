var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var randomColor = document.getElementById("randomColor");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + 
    color1.value +
    ", " + 
    color2.value + 
    ")";

    css.textContent = body.style.background + ";";
}

function randomColorGenerator() {
    var color = "#";
    var range = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    for (var i = 0; i< 6; i++) {
        color += range[Math.floor(Math.random() * range.length)];
    }
    return color;
}


color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
randomColor.addEventListener("click", function(){
    color1.value = randomColorGenerator();
    color2.value = randomColorGenerator();
    setGradient();
})

setGradient();