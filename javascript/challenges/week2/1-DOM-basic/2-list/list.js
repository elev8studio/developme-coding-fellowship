((d) => {

    // Using JavaScript, add a class of list-group-item to each item in the list.

    let listItems = Array.from(d.getElementById("list").children);

    listItems.forEach(el => el.classList.add("list-group-item"));

})(document);
