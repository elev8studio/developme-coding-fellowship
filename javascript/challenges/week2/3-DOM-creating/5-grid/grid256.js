(d => {

    // identify append location on DOM
    let grid = d.getElementById("grid");
    // create document fragment to optimise performance
    let fragment = d.createDocumentFragment();
    // set grid width
    const cols = 256; // number of spans
    // set red and green increment value for each span iteration
    const colourIncrement = 1;
    // set grid item width / height
    const size = 1;

    // iterate through grid items and apply necessary styling (background colour and positioning)
    for (let i = 0; i < col ** 2; i += 1) {
        // column index calculation
        const colIndex = i % cols;
        // row index calculation
        const rowIndex = Math.floor(i / cols);
        // create grid item `span` element
        let span = d.createElement("span");
        // iterate through green colour values
        let green = colIndex * colourIncrement;
        // iterate through red colour values
        let red = rowIndex * colourIncrement;
        // apply iterated background colour style property to grid item
        span.style.backgroundColor = `rgb(${red},${green},127)`;

        // iterate through grid item position `top`
        let top = colIndex * size;
        // iterate through grid item position `left`
        let left = rowIndex * size;
        // apply iterated position values to grid item using `transform = translate(x,y)` property
        span.style.transform = `translate(${left}px, ${top}px)`;

        // append each span to phantom grid element
        fragment.append(span);
    }

    // append phantom grid to DOM element
    grid.append(fragment);

})(document);