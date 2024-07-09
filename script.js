'use strict'

let colorArg;

const chooseColorButton = document.querySelector("#chooseColor");
const rainbowButton = document.querySelector("#rainbow");
const eraseButton = document.querySelector("#erase");

// let colorType = "0, 0, 0"; //make this default already?
// let opacity = "1"; //keep same for now.  if color works, write similar logic and change to opacityType


const pixelGrid = document.querySelector(".pixelGrid");


    // pass arg in here for color types?  
const changePixelColor = function() {

    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            let color = () => {
                console.log("ran pixel");
                console.log(colorArg);
                switch(colorArg) {
                    case("chooseColor"):
                        color = getColorChoice();
                        return(color);
                    case("rainbow"):
                        color = getRainbow();
                        return(color);
                    case("erase"):
                        color = getErase();
                        return(color);
                    // default:
                        // color = getDefault();
                        // console.log('ran default');
                        // return(color);


                        // would the return bust everything out of scope and only add one event listener?

                    // for the last two, dont call a function
                }
            }
            pixel.style.backgroundColor = color();
            //color not having () might be the error (i just added it)
            
        });
    });
}

changePixelColor();

const gridButton = document.querySelector(".gridButton");
//**If you use querySelectorAll later this will break**
// By break I think I meant it adds it to the prompt to the clear button too

gridButton.addEventListener("click", () => {
    let gridSize = prompt("Please choose a grid size between 1 and 100:");
    gridSize = Math.round(gridSize);

    if (gridSize >= 1 && gridSize <= 100) {
        // console.log(gridSize);
        pixelGrid.innerHTML = '';
        // clears grid
        changeGrid(gridSize);
    }
    else {
        alert("Please try again");
    }
});

const changeGrid = function(size) {
    console.log(size);
    let width = 700 / size;
    let height = width;
    
    console.log(width);
    console.log(height);

    for (let i=0; i < size ** 2; i++){
        console.log(size);
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${width}px`;
        pixel.style.height = `${height}px`;
        pixelGrid.appendChild(pixel);
    }

    changePixelColor();
}

const getColorChoice = function() {
    return(chooseColorButton.value);

}

const getRainbow = function() {
    const vals = ["r", "g", "b"];

    vals.forEach((val) => {
        val = Math.round((Math.random() * 255));
        vals.shift();
        vals.push(val);
    });

    const rainbowColor = vals.toString();
    
    return(`rgb(${rainbowColor})`);
}

const getErase = function() {
    return("white"); 
}

// const getDefault = function() {
//     // return("black");
//     console.log("hi)");
// }


// put above at tippy top if hoisting needed

const colorButtons = document.querySelectorAll(".colorButton");

colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", () => {
        if (colorButton.classList.contains("buttonDown")) {
            colorButton.classList.remove("buttonDown");
            colorButton.classList.add("buttonUp");
            colorArg = "defaultBlack";
            // is this being used?
            console.log('ran button if');
            // default is black         
        }
        else {

            switch(colorButton.id) {
                case("chooseColor"):
                    console.log('ran color button id');
                    console.log(colorButton.id);

                    colorButton.classList.remove("buttonUp");
                    colorButton.classList.add("buttonDown");
                    // toggle this later maybe
                    rainbowButton.classList.remove("buttonDown");
                    rainbowButton.classList.add("buttonUp");
                    eraseButton.classList.remove("buttonDown");
                    eraseButton.classList.add("buttonUp");
                    colorArg = "chooseColor";
                    break;
                case("rainbow"):
                    colorButton.classList.remove("buttonUp");
                    colorButton.classList.add("buttonDown");
                    chooseColorButton.classList.remove("buttonDown");
                    chooseColorButton.classList.add("buttonUp");
                    eraseButton.classList.remove("buttonDown");
                    eraseButton.classList.add("buttonUp");
                    colorArg = "rainbow";
                    break;
                case("erase"):
                    colorButton.classList.remove("buttonUp");
                    colorButton.classList.add("buttonDown");
                    chooseColorButton.classList.remove("buttonDown");
                    chooseColorButton.classList.add("buttonUp");
                    rainbowButton.classList.remove("buttonDown");
                    rainbowButton.classList.add("buttonUp");
                    colorArg = "erase";
                    break;
            }
        }
        console.log(typeof colorArg);
    });
});