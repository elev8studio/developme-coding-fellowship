(d => {

    let phobias = [
        "katastichophobia",
        "rhabdophobia",
        "eisoptrophobia",
        "papaphobia",
        "hypegiaphobia",
        "odontophobia",
        "ergophobia",
        "pteronophobia",
        "taphephobia",
        "apiphobia",
    ].sort();
    // identify append location in DOM
    let phobiasList = d.getElementById("phobias");
    // create list for letters
    let list = d.createElement("ul");
    // create global variables
    let prevLetter, listItem, subList, subListItem;

    phobias.forEach(phobia => {
        // iterate one letter at a time
        let letter = phobia.charAt(0);

        if (letter !== prevLetter) {
            // make sure we don't add the same letter twice
            prevLetter = letter;
            // create new `li` for letter
            listItem = d.createElement("li");
            // make list item equal to first letter of phobia
            listItem.textContent = letter;
            // append letter list item to main list
            list.append(listItem);
            // define sub list `ul` for phobia names
            subList = d.createElement("ul");
            // append phobia list to letter list item
            listItem.append(subList);
        };
        // define sub list item as new `li` element
        subListItem = d.createElement("li");
        // make sub list item equal to phobia string
        subListItem.textContent = phobia;
        // append sub list item `li` to sub list `ul`
        subList.append(subListItem);
    });

    // append entire list to DOM
    phobiasList.append(list);

})(document);