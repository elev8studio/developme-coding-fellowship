(d => {

    // create a constant variable for canvas on DOM
    const canvas = document.getElementById('canvas');
    // supply the canvas with a 2D rendering context
    const ctx = canvas.getContext('2d');

    // iterate through grid items and apply necessary styling (background colour and positioning)
    for (let i = 0; i < col ** 2; i += 1) {
        // column index calculation
        const colIndex = i % cols;
        // row index calculation
        const rowIndex = Math.floor(i / cols);
        // iterate through green colour values
        let green = colIndex * colourIncrement;
        // iterate through red colour values
        let red = rowIndex * colourIncrement;
        // assigning the fill colour increment to pixel
        ctx.fillStyle = `rgb(${red},${green},127)`;
        // placing the pixel with the current fill colour
        ctx.fillRect(colIndex, rowIndex, 1, 1);
    }

})(document);