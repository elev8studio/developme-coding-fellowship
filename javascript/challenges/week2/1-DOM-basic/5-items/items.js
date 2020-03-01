((d) => {

    // In items.html, use JavaScript to add a class of col-x where x is the column that the item should appear in if it's in a four by four grid and add a class of row-y, where y represents the current row the item should appear on. For example, the first item would have the class col-1 row-1, the second col-2 row-1, the fifth col-1 row-2. If the CSS classes existed, your code should work for any size grid.

    const columns = 4;
    let items = Array.from(d.getElementById("items").children);

    items.forEach((el, i) => {
        let col = (i % columns) + 1;
        let row = Math.floor(i / columns) + 1;

        el.classList.add(`col-${col}`, `row-${row}`);
    });

})(document);