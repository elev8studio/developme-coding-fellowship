// Write some code that outputs the sum of the first 117 multiples of either 3 or 7 (e.g. 3 + 6 + 7 + 9 + 12 + 14 + ...)

let sum = 0; // cumulative sum of multiples found
let counter = 0 // how many multiples of 3 or 7 have we found
let i = 1; // how many times the loop has run

while (counter < 117) {
    if (i % 3 === 0 || i % 7 === 0) {
        sum += i;
        counter += 1;
    }
    i += 1;
}

console.log(sum); // 16107
