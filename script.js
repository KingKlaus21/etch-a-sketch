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
        
        pixel.style.opacity = 1;

        pixel.addEventListener("mouseover", () => {

            pixel.style.backgroundColor = colorPicker(colorArg);

            let currentOpacity = pixel.style.opacity;
            pixel.style.opacity = opacityPicker(opacityArg, currentOpacity);
            console.log(pixel.style.opacity);


            // pixel.style.opacity = (opacityArg == "chooseColor") ? opacityPicker(opacityArg) 
            //                                                   : Number(currentOpacity) + Number(opacityPicker(opacityArg));  
            // console.log(Number(currentOpacity) + Number(opacityPicker(opacityArg)));
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
            return("white");
            // erase function returns white every time, so its easier to just set it here
        default:
            console.log('ran default color');
            return;
    }
}

const opacityPicker = function(opacityArg, currentOpacity) {
    if (opacityArg == "chooseOpacity") {
        return(getOpacityChoice());
    }
    else if (opacityArg == "lighten" && currentOpacity >= 0.1) {
        if (currentOpacity == 0.1) {
            return(0.05);
        }
        else {
            return(currentOpacity - 0.1);
        }
    }
    else if (opacityArg == "darken" && currentOpacity < 1) {
        if (currentOpacity == 0.05) {
            currentOpacity -= 0.05; // accounts for fully transparent
        }
        return(Number(currentOpacity) + 0.1);
    }
    else {
        return(currentOpacity);
    }
}

const newGridButton = document.querySelector(".newGridButton");
//**If you use querySelectorAll later this will break**
// By break I think I meant it adds it to the prompt to the clear button too

newGridButton.addEventListener("dblclick", () => {
    newGridButton.classList.toggle("buttonDown");
    setTimeout(() => {
        let gridSize = prompt("Please choose a grid size between 1 and 100:");
        gridSize = Math.round(gridSize);

        if (gridSize >= 1 && gridSize <= 100) {
            // console.log(gridSize);
            pixelGrid.innerHTML = '';
            // clears grid
            changeGrid(gridSize);
        }
        else if (gridSize < 1 || gridSize > 100) {
            alert("Please try again");
        }
        newGridButton.classList.toggle("buttonDown");
    }, 50);
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
        pixel.style.opacity = 1;
        pixelGrid.appendChild(pixel);
    }

    changePixelAppearance();
}

const clearGridButton = document.querySelector(".clearGridButton");

clearGridButton.addEventListener("dblclick", () => {

    const pixels = document.querySelectorAll(".pixel");
    clearGridButton.classList.toggle("buttonDown");

    setTimeout(() => {
        pixels.forEach((pixel) => {
            pixel.style.backgroundColor = "white";
            pixel.style.opacity = "1";
        });
        clearGridButton.classList.toggle("buttonDown");
    }, 50);

    // pixels.forEach((pixel) => {
    //     pixel.style.backgroundColor = "white";
    //     pixel.style.opacity = "1";
    // });
    
});




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
    console.log(rainbowColor);
    
    return(`rgb(${rainbowColor})`);
}

// const getErase = function() {
//     return("white"); 
// }



const getOpacityChoice = function() {

    if (chooseOpacityButton.value == 0) {
        return(Number(chooseOpacityButton.value) + 0.05);
    }
    else if ((Number(chooseOpacityButton.value) * 10) % 1 != 0) {
        return(chooseOpacityButton.value - 0.05);
    }
    else {
        return(Number(chooseOpacityButton.value));
    }
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
                    colorButton.classList.add("buttonDown");
                    chooseColorButton.classList.remove("buttonDown");
                    eraseButton.classList.remove("buttonDown");
                    colorArg = "rainbow";
                    break;
                case("erase"):
                    colorButton.classList.add("buttonDown");
                    chooseColorButton.classList.remove("buttonDown");
                    rainbowButton.classList.remove("buttonDown");
                    colorArg = "erase";
                    break;
            }
        }
    });
});

const opacityButtons = document.querySelectorAll(".opacityButton");

opacityButtons.forEach((opacityButton) => {
    opacityButton.addEventListener("dblclick", () => {
        if (opacityButton.classList.contains("buttonDown")) {
            opacityButton.classList.toggle("buttonDown");
            chooseOpacityButton.value = '';
            chooseOpacityButton.readOnly = true;
            opacityArg = "defaultOpacity";
        }
        else {
            switch(opacityButton.id) {
                case("chooseOpacity"):
                    opacityButton.classList.add("buttonDown");
                    chooseOpacityButton.readOnly = false;
                    // chooseOpacityButton.placeholder = "0 to 1";
                    lightenButton.classList.remove("buttonDown");
                    darkenButton.classList.remove("buttonDown");
                    opacityArg = "chooseOpacity";
                    break;
                case("lighten"):
                    opacityButton.classList.add("buttonDown");
                    chooseOpacityButton.classList.remove("buttonDown");
                    chooseOpacityButton.value = '';
                    chooseOpacityButton.readOnly = true;
                    darkenButton.classList.remove("buttonDown");
                    opacityArg = "lighten";
                    break;
                case("darken"):
                    opacityButton.classList.add("buttonDown");
                    chooseOpacityButton.classList.remove("buttonDown");
                    chooseOpacityButton.value = '';
                    chooseOpacityButton.readOnly = true;
                    lightenButton.classList.remove("buttonDown");
                    opacityArg = "darken";
                    break;
            }
        }
    });
});