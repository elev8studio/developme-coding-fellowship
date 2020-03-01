(d => {

    // define button element
    let button = d.getElementById('add');
    // define list element
    let list = d.getElementById('list');
    // define input
    let input = d.getElementById('todo');
    // add event listener to button
    button.addEventListener('click', () => {
        if (input.value.trim() !== "") {
            // create new list item
            let listItem = d.createElement("li");
            // set item content from input value
            listItem.textContent = input.value;
            // prepend new list item if input value is NOT empty string or blank spaces
            list.prepend(listItem);
        };
        input.value = "";
    });

})(document);