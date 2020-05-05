var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); 

function init() {
    //mode buttons event listeners
    setupModeButtons();
    
    //event handlers for squares
    setupSquares();

    //reset everything we see
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
    
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
}

function reset() {
    //generate all new colors;
    colors = generateRandomColors(numSquares);
    //pick a new random color to be correct; 
    pickedColor = pickColor();

    //change colorDisplay to match new picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"; 
    messageDisplay.textContent = "";
    //change colors of squares;
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});

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
