(d => {

    let main = d.getElementById("rhubarbs");
    let fragment = d.createDocumentFragment();

    for (i = 0; i < 100; i += 1) {
        let para = d.createElement("p");
        para.textContent = "Rhubarb";
        fragment.append(para);
    }

    main.append(fragment);

})(document);