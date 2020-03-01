(d => {

    let main = d.getElementById("main"),
        input1 = d.getElementById("value1"),
        input2 = d.getElementById("value2"),
        answer = d.getElementById("answer");

    main.addEventListener("click", event => {
        let clicked = event.target;
        let calc;
        if (clicked.matches("#add")) {
            calc = +input1.value + +input2.value;
        } else if (clicked.matches("#subtract")) {
            calc = +input1.value - +input2.value;
        } else if (clicked.matches("#multiply")) {
            calc = +input1.value * +input2.value;
        } else if (clicked.matches("#divide")) {
            calc = +input1.value / +input2.value;
        }

        answer.textContent = calc;

    });

})(document);