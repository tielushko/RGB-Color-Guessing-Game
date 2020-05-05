var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add event listeners to squares.
    squares[i].addEventListener("click", function() {
        //grab color
        var selectedColor = this.style.backgroundColor;
        //compare the color
        if (selectedColor === pickedColor) {
            alert("Correct");
        } else {
            alert("Wrong");
        }
    });

    
}