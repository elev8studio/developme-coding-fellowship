(d => {

    let board = d.getElementById("checkers");
    let squares = Array.from(board.children);
    const width = 8;

    squares.forEach((el, i) => {
        let cols = i % width;
        let rows = Math.floor(i / width);
        let odds = cols % 2 !== 0 && rows % 2 !== 0;
        let evens = cols % 2 === 0 && rows % 2 === 0;

        if (odds || evens) {
            el.style.backgroundColor = "black";
        };

        // if ((rows + cols) % 2 !== 0) {
    //     el.style.backgroundColor = "black";
    // }
    });

})(document);
