(d => {

    let el = d.getElementById("time");
    let pad = value => value < 10 ? "0" + value : value;
    let clock = () => {
        let now = new Date(),
            hours = pad(now.getHours()),
            minutes = pad(now.getMinutes()),
            seconds = pad(now.getSeconds());
        el.textContent = `${hours}:${minutes}:${seconds}`;
    };
    setInterval(clock, 1000);
    clock();

})(document);