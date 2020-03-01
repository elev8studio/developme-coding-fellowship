// Create a function, min, that takes an array of numbers. Using .reduce() return the smallest number.

// Hint: don't try and use .sort() - it won't do what you think
let minCalc = (a, b) => a < b ? a : b;

let min = values => values.reduce(minCalc, values[0]);

// let min = values => Math.min(...values);

console.log(
    min([2, 4, 6, 4, 7, 5]), // 2
    min([-2, 4, 6, 4, -7, 5]), // -7
    min([-2, -4, -11, -4, -7, -5]), // -11
);
