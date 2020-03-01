(d => {

    let image = d.getElementById('image');
    let reset = d.getElementById('reset');
    let width = image.clientWidth;
    let height = image.clientHeight;

    image.addEventListener('click', () => {
        width *= 2;
        height *= 2;
        image.style.width = `${width}px`;
        image.style.height = `${height}px`;
    });

    reset.addEventListener('click', () => {
        image.removeAttribute('style');
    })

})(document);