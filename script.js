'use strict'

const pixelGrid = document.querySelector(".pixelGrid");

const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.style.background = "blue";
        // make function to change color above
    });
});

const gridButton = document.querySelector(".gridButton");

gridButton.addEventListener("click", () => {
    let gridSize = prompt("Please choose a grid size between 1 and 100:");
    Math.round(gridSize);

    if (gridSize >= 1 && gridSize <= 100) {
        // console.log(gridSize);
        pixelGrid.innerHTML = '';
        // clears grid
        changeGrid(gridSize ** 2);
    }
    else {
        alert("Please try again");
    }
});

const changeGrid = function(size) {
    let width = (size) => 700 / size;
    let height = width;
    let borderWidth = width * 0.042857148571;
    // might need to add "px" to some of these

    for (let i=0; i < size; i++){
        const pixel = document.createElement("div");
        pixel.classList.add(".pixel");
        pixel.style.width = width;
        pixel.style.height = height;
        pixel.style.borderWidth = borderWidth;
        pixelGrid.appendChild(pixel);
    }
}



// this gets the size of 