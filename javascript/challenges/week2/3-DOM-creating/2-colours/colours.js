(d => {

    let list = d.getElementById("colours");
    let fragment = d.createDocumentFragment();

    let coloursArr = Array.from(d.getElementById("items").children).map(el => el.style.backgroundColor);

    coloursArr.forEach((colour) => {
        let li = d.createElement("li");
        li.textContent = colour;
        fragment.append(li);
    });

    list.append(fragment);

})(document);