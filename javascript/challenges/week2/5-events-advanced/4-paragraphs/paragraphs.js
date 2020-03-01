(d => {
    let main = d.getElementById("main");
    let remove = d.getElementById("remove");
    let dump = [];

    main.addEventListener("click", event => {
        let clicked = event.target;

        if (clicked.matches("p")) {
            clicked.classList.add("selected");
            dump.push(clicked);
        };
    });

    remove.addEventListener("click", () => {
        dump.forEach(el => el.remove());
        dump = [];
    })
})(document);