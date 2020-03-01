// Create a function, max, that takes an array of numbers. Using .reduce() return the largest number.

// Hint: don't try and use .sort() - it won't do what you think
let getMax = (a, b) => a > b ? a : b;

let max = values => values.reduce(getMax, values[0]);
console.log(
    max([2, 4, 6, 4, 7, 5]), // 7
    max([-2, 4, 6, 4, -7, 5]), // 6
    max([-2, -4, -6, -4, -7, -5]), // -2
);