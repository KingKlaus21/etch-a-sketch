'use strict'

const pixelGrid = document.querySelector(".pixelGrid");

const changePixelColor = function() {
    // pass arg in here for color types?  
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.background = "blue";
            // make function to change color above
        });
    });
}

changePixelColor();

const gridButton = document.querySelector(".gridButton");

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
    // let borderWidth = width * 0.042857148571;
    
    console.log(width);
    console.log(height);
    // console.log(borderWidth);

    for (let i=0; i < size ** 2; i++){
        console.log(size);
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${width}px`;
        pixel.style.height = `${height}px`;
        // pixel.style.borderWidth = `${borderWidth}px`;
        pixelGrid.appendChild(pixel);
    }

    changePixelColor();    

}
