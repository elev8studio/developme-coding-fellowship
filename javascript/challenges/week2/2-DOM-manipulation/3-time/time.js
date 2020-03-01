(d => {

    let el = d.getElementById("time");
    let now = new Date();
    let pad = value => value < 10 ? "0" + value : value;
    let hours = pad(now.getHours());
    let minutes = pad(now.getMinutes());
    let seconds = pad(now.getSeconds());
    let currentTime = `${hours}:${minutes}:${seconds}`;
    el.textContent = currentTime;

})(document);