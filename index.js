var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBTN = document.querySelector("#easy-btn");
var hardBTN = document.querySelector("#hard-btn");

easyBTN.addEventListener("click", function() {
    easyBTN.classList.add("selected");
    hardBTN.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBTN.addEventListener("click", function() {
    hardBTN.classList.add("selected");
    easyBTN.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
    
    //generate all new colors;
    colors = generateRandomColors(numSquares);
    //pick a new random color to be correct; 
    pickedColor = pickColor();

    //change colorDisplay to match new picked color
    colorDisplay.textContent = pickedColor;

    //change colors of squares;
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add event listeners to squares.
    squares[i].addEventListener("click", function() {
        //grab color
        var selectedColor = this.style.backgroundColor;
        //compare the color
        if (selectedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(selectedColor);
            h1.style.backgroundColor = selectedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateRandomColors(size) {
    //make an array
    var arr = [];
    //add "size" amount of random colors to array
    for(var i = 0; i < size; i++) {
        //getRandom color
        var color = randomColor();
        //push into array
        arr.push(color);
    }
    //return
    return arr;
}

function randomColor() {
    //pick a red 0-255
    var red = Math.floor(Math.random() * 256);
    //pick a green 0-255
    var green = Math.floor(Math.random() * 256);
    //pick a green 0-255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}