'use strict'

let colorType = "0, 0, 0"; //make this default already?
let opacity = "1"; //keep same for now.  if color works, write similar logic and change to opacityType


const pixelGrid = document.querySelector(".pixelGrid");

const changePixelColor = function() {
    // pass arg in here for color types?  
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            // color = getColorType()
            const color = colorType; //hopefully this wont just call it right away
            pixel.style.backgroundColor = `rgba(${color},${opacity})`;
            console.log(pixel.style.backgroundColor);
            // make function to change color above
        });
    });
}

changePixelColor();

const gridButton = document.querySelector(".gridButton");
//**If you use querySelectorAll later this will break**

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
    // color = "110, 201, 29";
    return(`110, 201, 29`);
}

const getRainbow = function() {
    const vals = ["r", "g", "b"];

    vals.forEach((val) => {
        val = Math.round((Math.random() * (255 - 0)) + 0);
        vals.shift();
        vals.push(val);
    });

    console.log(vals);

    const stringVals = `${vals.toString()}`;
    // color = stringVals;
    console.log(stringVals);
    return(stringVals);
}

const getErase = function() {
    return("255, 255, 255"); //should this be a string?  separated too?
}

const getDefault = function() {
    return("0, 0, 0");
}


// put above at tippy top if hoisting needed

const colorButtons = document.querySelectorAll(".colorButton");

colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", () => {
        if (colorButton.classList.contains("buttonDown")) {
            colorButton.classList.remove("buttonDown");
            colorButton.classList.add("buttonUp");
            getColorType("default");   
            // default is black         
        }
        else {
            const chooseColorButton = document.querySelector("#chooseColor");
            const rainbowButton = document.querySelector("#rainbow");
            const eraseButton = document.querySelector("#erase");

            switch(colorButton.id) {
                case("chooseColor"):
                    colorButton.classList.remove("buttonUp");
                    colorButton.classList.add("buttonDown");
                    // toggle this later maybe
                    rainbowButton.classList.remove("buttonDown");
                    rainbowButton.classList.add("buttonUp");
                    eraseButton.classList.remove("buttonDown");
                    eraseButton.classList.add("buttonUp");
                    getColorType("chooseColor");
                    break;
                case("rainbow"):
                    colorButton.classList.remove("buttonUp");
                    colorButton.classList.add("buttonDown");
                    chooseColorButton.classList.remove("buttonDown");
                    chooseColorButton.classList.add("buttonUp");
                    eraseButton.classList.remove("buttonDown");
                    eraseButton.classList.add("buttonUp");
                    getColorType("rainbow");
                    break;
                case("erase"):
                    colorButton.classList.remove("buttonUp");
                    colorButton.classList.add("buttonDown");
                    chooseColorButton.classList.remove("buttonDown");
                    chooseColorButton.classList.add("buttonUp");
                    rainbowButton.classList.remove("buttonDown");
                    rainbowButton.classList.add("buttonUp");
                    getColorType("erase");
                    break;
            }
        }
    });
});

const getColorType = function(id) {

    switch(id) {
        case("chooseColor"):
            colorType = getColorChoice();
            break;
        case("rainbow"):
            colorType = getRainbow();
            break;
        case("erase"):
            colorType = getErase();
            break;
        case("default"):
            colorType = getDefault();
            break;
        // if this runs the function rather than assigns it, consider putting logic here?
    }
}



// const buttons = document.querySelectorAll(".optionContainer");

// buttons.forEach((button) => {
//     const buttonImg = button.querySelector('img');

//     button.addEventListener("click", () => {

//         if (button.id != "neverToggle" && !button.classList.contains("noToggle")) {

//             button.classList.toggle("buttonIn");
//             buttonImg.classList.toggle("buttonInImg");

//             let choiceId = button.getAttribute("id");

//             setTimeout(() => {
//                 button.classList.toggle("buttonIn");
//                 buttonImg.classList.toggle("buttonInImg");
//                 playRound(choiceId, getComputerChoice());
//             }, 120);
//         }

//     });
// });








// const toggleRainbow = function()


// the person will have a few color options:
// default, which can be set using the color attribute
// rainbow, which will get three random colors for rbg
// opacity, which changes opacity by 10%

// since math.random() uses values between 0 and 1, the conversion
// using rgb() is easiest.

// rgb(109 48 126 / 0.9)

// 0 0 0 is black; 255 255 255 is white; 
// / 0 is white; / 1 is full opacity of whatever color given

// for rainbow, use color(srbg num1 num2 num3) for r b g values
// for opacity, use / 0.3 to iterate from 0 to 1.0 by 0.1

// Since math.random includes 0 but excludes 1, you can use 
// max and min to include 1.  Using other tools, you can
// output a number between 0 and 100, multiply it by 0.01,
// and get a value with two decimal places.

// Call this in a forEach loop, and loop through the r, g, and b
// values you will be storing in an array.  Then, return the value.

// But why not just use Math.random() alone?  You could, but
// then you'd exclude 1.00 always.  Yes, it's because of one number

// function getRndInteger(min, max) {
//     for (let i = 1; i<=3; i++){
//     console.log(Math.round((Math.random() * (max - min)) + min));}
//   }
  
//   getRndInteger(0, 255);


// RAINBOW:

// const vals = ["r", "g", "b"];

// vals.forEach((val) => {
// val = Math.round((Math.random() * (255 - 0)) + 0);
// vals.shift();
// vals.push(val);
// });

// console.log(vals);


// ACTUAL RAINBOW:

// function getVals(){
    
//     const vals = ["r", "g", "b"];
    
//     vals.forEach((val) => {
//     val = Math.round((Math.random() * (255 - 0)) + 0);
//     vals.shift();
//     vals.push(val);
//     });

//     let stringVals = `"${vals.toString()}"`;

    
    
//     console.log(stringVals);

// }