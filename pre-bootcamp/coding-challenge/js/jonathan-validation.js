bootstrapValidate('#email', 'email:Please enter a valid email address', function (isValid) {
    if (isValid) {
        document.querySelector('#email').style.color = "#28a745";
    } else {
        document.querySelector('#email').style.color = "#dc3545";
    }
});
bootstrapValidate('#name', 'required:Please enter your name', function (isValid) {
    if (isValid) {
        document.querySelector('#name').style.color = "#28a745";
    }
});
bootstrapValidate('#mobile', 'min:0', function (isValid) {
    if (isValid) {
        document.querySelector('#mobile').style.color = "#28a745";
    }
});
bootstrapValidate('#message', 'required:Please fill in this field', function (isValid) {
    if (isValid) {
        document.querySelector('#message').style.color = "#28a745";
    }
});
