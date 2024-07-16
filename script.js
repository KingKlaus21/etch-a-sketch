'use strict'

let colorArg;
let opacityArg;

const chooseColorButton = document.querySelector("#chooseColor");
const rainbowButton = document.querySelector("#rainbow");
const eraseButton = document.querySelector("#erase");

const chooseOpacityButton = document.querySelector("#chooseOpacity");
const lightenButton = document.querySelector("#lighten");
const darkenButton = document.querySelector("#darken");

// let colorType = "0, 0, 0"; //make this default already?
// let opacity = "1"; //keep same for now.  if color works, write similar logic and change to opacityType


const pixelGrid = document.querySelector(".pixelGrid");


    // pass arg in here for color types?  
const changePixelAppearance = function() {

    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = colorPicker(colorArg);   
            pixel.style.opacity = opacityPicker(opacityArg);      
        });
    });
}

changePixelAppearance();

const colorPicker = function(colorArg) {
        switch(colorArg) {
            case("chooseColor"):
                return(getColorChoice());
            case("rainbow"):
                return(getRainbow());
            case("erase"):
                return(getErase());
            default:
                console.log('ran default color');
                return;
    }
}

const opacityPicker = function(opacityArg) {
    switch(opacityArg) {
        case("chooseOpacity"):
            return(getOpacityChoice());
        case("lighten"):
            return(getLighten());
        case("darken"):
            return(getDarken());
        default:
            console.log('ran default opacity');
            return;
    }
}

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

    changePixelAppearance();
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



const getOpacityChoice = function() {
    let chosenOpacity = prompt("Choose value betwen 0 and 1");
    return(chosenOpacity);
}

const getLighten = function() {
    // this will be the current value minus 0.1
}

const getDarken = function() {
    // this will be the current value plus 0.1
}

const colorButtons = document.querySelectorAll(".colorButton");

colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", () => {
        if (colorButton.classList.contains("buttonDown") && colorButton.id != "chooseColor") {
            colorButton.classList.toggle("buttonDown");
            colorArg = "defaultColor";
        }
        else {
            switch(colorButton.id) {
                case("chooseColor"):
                    colorButton.classList.add("buttonDown");
                    rainbowButton.classList.remove("buttonDown");
                    eraseButton.classList.remove("buttonDown");
                    colorArg = "chooseColor";
                    break;
                case("rainbow"):
                    colorButton.classList.toggle("buttonDown");
                    chooseColorButton.classList.remove("buttonDown");
                    eraseButton.classList.remove("buttonDown");
                    colorArg = "rainbow";
                    break;
                case("erase"):
                    colorButton.classList.toggle("buttonDown");
                    chooseColorButton.classList.remove("buttonDown");
                    rainbowButton.classList.remove("buttonDown");
                    colorArg = "erase";
                    break;
            }
        }
    });
});

const opacityButtons = doucment.querySelectorAll(".opacityButton");

opacityButtons.forEach((opacityButton) => {
    opacityButton.addEventListener("click", () => {
        if (opacityButton.classList.contains("buttonDown") && opacityButton.id != "chooseOpacity") {
            opacityButton.classList.toggle("buttonDown");
            opacityArg = "defaultOpacity";
        }
        else {
            switch(opacityButton.id) {
                case("chooseOpacity"):
                    opacityButton.classList.add("buttonDown");
                    lightenButton.classList.remove("buttonDown");
                    darkenButton.classList.remove("buttonDown");
                    opacityArg = "chooseColor";
                    break;
                case("lighten"):
                    opacityButton.classList.toggle("buttonDown");
                    chooseOpacityButton.classList.remove("buttonDown");
                    darkenButton.classList.remove("buttonDown");
                    colorArg = "lighten";
                    break;
                case("darken"):
                    opacityButton.classList.toggle("buttonDown");
                    chooseOpacityButton.classList.remove("buttonDown");
                    lightenButton.classList.remove("buttonDown");
                    colorArg = "darken";
                    break;
            }
        }
    });
});