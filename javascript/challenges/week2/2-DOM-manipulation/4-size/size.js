(d => {

    let width = d.getElementById("width"),
        height = d.getElementById("height");

    width.textContent = window.innerWidth;
    height.textContent = window.innerHeight;


})(document);