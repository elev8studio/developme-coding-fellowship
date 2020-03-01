// Every character on the keyboard has a "Character Code" associated with it: e.g. "A" is 65. We can use String.fromCharCode(65) to get back the letter "A".

// Write some code that outputs the letters A-Z.

let alphabet = 65;

for (let i = 0; i < 26; i++) {
    console.log(String.fromCharCode(alphabet));
    alphabet += 1;
}

// OR

for (let j = 65; j <= 90; j++) {
    console.log(String.fromCharCode(j));
}