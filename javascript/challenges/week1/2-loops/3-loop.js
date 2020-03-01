// Write some code that lists all multiples of 13 up to 1,000 using a for loop

let multiple = 13;

for (let i = 1; i <= 1000; i += 1) {
    if (i % multiple === 0) {
        console.log(i);
    }
}