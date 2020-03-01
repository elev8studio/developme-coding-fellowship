(d => {

    let main = d.getElementById("main");

    main.addEventListener("click", e => {
        let clicked = e.target;
        if (clicked.matches("button")) {
            let button = d.createElement("button");
            button.classList.add("btn", "btn-primary");
            button.textContent = "Click me!";
            main.prepend(button);
        };
    });

})(document);