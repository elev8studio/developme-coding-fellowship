(d => {

    let password = d.getElementById("password");
    let feedback = d.getElementById("feedback");

    password.addEventListener("input", e => {
        if (password.value.length === 0) {
            password.style.backgroundColor = "transparent";
            feedback.textContent = "";
        } else if (password.value.length < 10) {
            password.style.backgroundColor = "rgb(250, 85, 85)";
            feedback.textContent = "Strength: Your password is hackable!";
        } else if (password.value.length <= 18) {
            password.style.backgroundColor = "rgb(250, 140, 40)";
            feedback.textContent = "Strength: Getting there - make it longer for extra security";
        } else if (password.value.length > 18) {
            password.style.backgroundColor = "rgb(60, 230, 90)";
            feedback.textContent = "Strength: Your password is fantasic!";
        }
    });

})(document);