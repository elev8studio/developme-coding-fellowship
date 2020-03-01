(d => {

    // identify append location in DOM
    let main = d.getElementById("alphabet");
    // create phantom element
    let fragment = d.createDocumentFragment();
    // create list element to append alphabet
    let list = d.createElement("ul");
    // create empty array
    let alphabet = [];

    // ASCII lower case alphabet index 97 - 122
    for (i = 97; i <= 122; i += 1) {
        // create alphabet array fromCharCode index
        alphabet.push(String.fromCharCode(i));
    };

    // create li elements for each letter
    // then append to list element
    alphabet.forEach(char => {
        let li = d.createElement("li");
        li.textContent = char;
        list.append(li);
    })

    // append list to phantom element
    fragment.append(list);

    // append fragment element to DOM
    main.append(fragment)

})(document);