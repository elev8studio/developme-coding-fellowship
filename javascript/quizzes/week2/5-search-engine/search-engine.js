(d => {

    let links = d.getElementById("links");
    let output = d.getElementById("output")

    links.addEventListener("click", e => {
        e.preventDefault();
        let clicked = e.target;
        if (clicked.matches(".list-group-item")) {
            output.textContent = clicked.textContent;
        }
    })

})(document);