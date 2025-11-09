let inputBox = document.getElementById("input-box");
let resulBox = document.getElementById("result-box");
let changeColor = () => {
    let input = inputBox.value;
    resulBox.style.backgroundColor = input;
}

inputBox.addEventListener("input", changeColor);
window.addEventListener("load",changeColor);