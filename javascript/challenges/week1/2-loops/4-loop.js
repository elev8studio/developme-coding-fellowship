// Write some code that lists all multiples of 13 up to 1,000 using a while loop

let i = 1;
let multiple = 13;

while (i <= 1000) {
    if (i % multiple === 0) {
        console.log(i);
    }
    i += 1;
}