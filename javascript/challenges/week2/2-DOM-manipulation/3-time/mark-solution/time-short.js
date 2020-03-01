(d => {

    let time = d.getElementById("time");

    time.textContent = new Date().toLocaleTimeString();

})(document);