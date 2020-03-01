(d => {

    let red = d.getElementById('red');
    let green = d.getElementById('green');
    let blue = d.getElementById('blue');
    let picker = d.getElementById('picker');

    let update = () => {
        let redColor = red.value;
        let greenColor = green.value;
        let blueColor = blue.value;
        return picker.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;
    }

    red.addEventListener('input', update);

    green.addEventListener('input', update);

    blue.addEventListener('input', update);

    update();

})(document);