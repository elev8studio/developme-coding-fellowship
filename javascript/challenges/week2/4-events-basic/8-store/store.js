(d => {

    let input = d.getElementById('store'),
        add = d.getElementById('add'),
        display = d.getElementById('display'),
        list = d.getElementById('list'),
        storedValues = [],
        store = () => {
            storedValues.push(input.value);
            input.focus();
            input.value = "";
        },
        phantom = d.createDocumentFragment(),
        appendValues = () => {
            storedValues.forEach(value => {
                let listItem = d.createElement("li");
                listItem.classList.add('list-group-item');
                listItem.textContent = value;
                phantom.append(listItem);
            });
            list.prepend(phantom);
            storedValues = [];
        };

    add.addEventListener('click', store);
    display.addEventListener('click', appendValues);


})(document);