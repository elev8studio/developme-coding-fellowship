(d => {

    let main = d.getElementById("s");
    main.addEventListener("click", e => {
        let clicked = e.target;
        if (clicked.matches("span")) {
            clicked.style.backgroundColor =
                (clicked.style.backgroundColor !== "black") ? "black" : "white";
        };
    });

})(document);