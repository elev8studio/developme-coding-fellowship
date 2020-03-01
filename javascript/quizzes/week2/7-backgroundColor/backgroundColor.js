(d => {

    let square = d.getElementById("square");
    let colours = ["#C14414", "#EBB31A", "#8F5318", "#009EAD", "#395967"];
    let count = 0;
    square.addEventListener("click", () => {
        count += 1;
        count = count > 4 ? 0 : count;
        square.style.backgroundColor = colours[count];
    });

})(document);