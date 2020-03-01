(d => {

    let grid = d.getElementById("items");
    let gridItems = Array.from(grid.children);

    gridItems.forEach(item => {
        item.style.margin = "20px";
        item.style.position = "relative";
        item.style.display = "inline-block";
    });

    grid.style.maxWidth = "420px";

})(document);