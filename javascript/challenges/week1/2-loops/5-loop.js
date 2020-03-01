// Write some code that outputs any even numbers between 1 and 50 that are also divisible by 3

let i = 0;
let multiple = 3;

while (i <= 50) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i += 2;
}
