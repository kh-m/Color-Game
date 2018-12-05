var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
};

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

//Generates random colors and pushes them into colors array
function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

//Returns a random color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}







// MODES
//Make an easy mode that will only use 0 and 255
//Make an easier mode that will give the percentages of each color used
//perhaps an even easier mode where the font color opacity will be the same as the one being asked
//Option to include simple cheat-sheet with basic color combos
//Expert mode with HSLA
//'Turn on hint-mode' that colours the corresponding r/g/b value with that color in the heading


// COMPETITION
//Scorekeeper for competition
//Multiplayer mode (you can insert names)
//Countdown timer for competition

//Make it possible to select color box using keyboard and resetting using spacebar