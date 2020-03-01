(d => {

    let image = d.getElementById("image");
    let width = image.clientWidth * 2;
    let height = image.clientHeight * 2;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;

})(document);