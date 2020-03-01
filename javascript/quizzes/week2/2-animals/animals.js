(d => {

    let animals = d.getElementById("animals");

    animals.addEventListener("click", e => {
        let clicked = e.target;

        if (clicked.matches("li")) {
            animals.prepend(clicked);
        }
    });

})(document);