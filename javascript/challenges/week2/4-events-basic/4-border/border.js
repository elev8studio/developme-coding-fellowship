(d => {

    // define border div
    let square = d.getElementById('border');
    // total clicks
    let clicks = 0;
    // make red
    let makeRed = () => square.style.borderColor = "red";
    // make black
    let makeBlack = () => square.style.borderColor = "black";
    // change border color when square is clicked
    square.addEventListener('click', () => {
        clicks += 1;
        clicks % 2 === 0 ? makeBlack() : makeRed();
    });

})(document);