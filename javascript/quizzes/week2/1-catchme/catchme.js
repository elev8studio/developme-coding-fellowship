(d => {

    let button = d.getElementById("button");
    let count = 0;
    button.addEventListener("click", () => {
        count += 1;
        let top = 50 * count;
        button.style.transform = `translateY(${top}px)`;
    })

})(document);