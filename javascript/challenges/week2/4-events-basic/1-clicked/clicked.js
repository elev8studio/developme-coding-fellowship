(d => {

    let button = d.getElementById('button');
    button.addEventListener('click', () => {
        let clicked = d.createElement('p');
        clicked.textContent = "Clicked";
        button.after(clicked);
    });

})(document);