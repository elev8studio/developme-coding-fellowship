(d => {

    let width = d.getElementById("width");
    let height = d.getElementById("height");

    let dimensions = () => {
        width.textContent = window.innerWidth;
        height.textContent = window.innerHeight;
    }

    window.addEventListener('resize', dimensions);

    dimensions();

})(document);