((d, w) => {

    const background = d.body;
    const maxColorValue = 360;
    let setColor = () => {
        let height = background.offsetHeight - w.innerHeight;
        let colorIncrement = height / maxColorValue;
        let howFarDown = w.pageYOffset / height;
        let colorValue = Math.ceil(maxColorValue * howFarDown);
        background.style.backgroundColor = `hsl(${colorValue},50%,50%)`;
    };

    w.addEventListener('scroll', setColor);

    setColor();

})(document, window);