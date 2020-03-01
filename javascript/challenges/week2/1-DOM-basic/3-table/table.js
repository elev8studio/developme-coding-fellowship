((d) => {

    let rows = Array.from(d.getElementById("table").getElementsByTagName("tr"));

    rows.forEach((el, index) => {
        if (index % 2 !== 0) {
            el.classList.add("alternate");
        }
    });

})(document);
