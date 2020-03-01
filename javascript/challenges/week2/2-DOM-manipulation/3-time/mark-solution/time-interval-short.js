(d => {

    let el = d.getElementById("time");

    let clock = () => {
        time.textContent = new Date().toLocaleTimeString();
    };

    setInterval(clock, 1000);

    clock();

})(document);