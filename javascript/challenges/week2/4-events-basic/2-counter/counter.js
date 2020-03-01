(d => {

    const button = d.getElementById("button");
    const counter = d.getElementById("counter");
    let clicks = 0;
    button.addEventListener("click", () => {
        clicks += 1;
        counter.textContent = `You have clicked ${clicks} times!`;
    });

})(document);