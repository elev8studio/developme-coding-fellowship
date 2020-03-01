// Create a function, skip, that takes two numbers, skip and max. The function should return the total of the numbers from 1 to max excluding any numbers divisible by skip.

let skip = (skip, max) => {
    let total = 0;
    for (let i = 1; i <= max; i += 1) {
        if (i % skip !== 0) {
            total += i;
        }
    }
    return total;
}

console.log(
    skip(4, 20), // 150
);