let body = document.querySelector("body");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let button = document.getElementById("generate");

console.log(document.getElementById("textbox"));

function generate_background() {
    let radioselection = document.querySelector('input[name="direction"]:checked').value;

    body.style.background = "linear-gradient(" + radioselection +
        color1.value + ", " + color2.value + ")";

    document.getElementById("textbox").value = "linear-gradient(" + radioselection +
        color1.value + ", " + color2.value + ");"
}

button.addEventListener("click", generate_background);