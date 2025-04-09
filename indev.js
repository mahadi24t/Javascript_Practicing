let opnBox = document.getElementById('box');

opnBox.addEventListener('click', function(e) {
    console.log("I want to open the box!");
});
const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)

// that says "Thank you for buying!"
function buy() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Thank you for buying!";
    container.appendChild(paragraph);
    
}


