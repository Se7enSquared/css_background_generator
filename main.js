let body = document.querySelector("body");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let button = document.getElementById("generate");
let randombtn = document.getElementById("randombtn");

console.log(document.getElementById("textbox"));

function generate_background() {
    let radioselection = document.querySelector('input[name="direction"]:checked').value;

    body.style.background = "linear-gradient(" + radioselection + " " + " " +
        color1.value + ", " + color2.value + ")";

    document.getElementById("textbox").value = "background: linear-gradient(" + radioselection + " " + " " +
        color1.value + ", " + color2.value + ")";
}

function generate_random_colors() {
    color1.value = '#'+(~~(Math.random()*(1<<24))).toString(16);
    color2.value = '#'+(~~(Math.random() * (1 << 24))).toString(16);
    generate_background();
}


button.addEventListener("click", generate_background);
randombtn.addEventListener("click", generate_random_colors);

