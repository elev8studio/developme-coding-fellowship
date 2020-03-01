(d => {

    let roll = d.getElementById("roll");
    let dice1 = d.getElementById("dice1");
    let dice2 = d.getElementById("dice2");

    roll.addEventListener("click", () => {
        let random1 = Math.random();
        let random2 = Math.random();
        let number1 = Math.floor(random1 * 6) + 1;
        let number2 = Math.floor(random2 * 6) + 1;

        dice1.style.backgroundImage = `url('${number1}.png')`;
        dice2.style.backgroundImage = `url('${number2}.png')`;
    });

})(document);