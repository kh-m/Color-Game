var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
var langButtons = document.querySelectorAll(".language");
var colName = document.querySelector('#color-name');

initialize();

//initializes the webpage
function initialize() {
    setupModeButtons();
    setupLanguageButtons();
    setupSquares();
    reset();
}



//mode buttons event listeners
function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    };
}

//language buttons event listeners
function setupLanguageButtons() {
    for (var i = 0; i < langButtons.length; i++) {
        langButtons[i].addEventListener("click", function () {
            langButtons[0].classList.remove("selected");
            langButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.classList.contains('canada') ? colName.innerText = 'Colour' : colName.innerText = 'Color';
        })
    };
}

//colors/disables/listens to squares
function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
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
}

//resets page to original state
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Reset";
    messageDisplay.textContent = "";

    //loops through squares to recolor and display/hide them
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

        //Just used a simple way to reset the background color of h1's, since it was remaining
        //after selecting correct color
        h1.style.backgroundColor = "";
        h1.classList.add("pageTitle");
    }
};

//Reset Button function
resetButton.addEventListener("click", function () {
    reset();
});

//colors a square with the given argument
function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
};

//selects a random color as 'picked color' from the given number of colors
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