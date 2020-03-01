(d => {

    let input = d.getElementById("number"),
        button = d.getElementById("add"),
        output = d.getElementById("total"),
        numbers = [],
        add = values => values.reduce((total, n) => total + +n, 0);

    button.addEventListener("click", e => {
        e.preventDefault();
        numbers.push(input.value);
        output.textContent = add(numbers);
        input.value = "";
    });

    input.focus();

})(document);