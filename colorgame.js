var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
});

resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares on page
    for(var i=0; i<squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});

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
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
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
//Play with Pantone color names
//https://en.wikipedia.org/wiki/List_of_colors:_A–F


// COMPETITION
//Scorekeeper for competition
//2 attemps; 1st=2pts 2nd=1pt
//Multiplayer mode (you can insert names)
//Countdown timer for competition

//Make it possible to select color box using keyboard and resetting using spacebar
//Change background color to correct color once selected ...?
//Make correct box grow slightly when selected
//Comedic 'language selection'; Canadian/British: colour, US: color, French: colour etc.