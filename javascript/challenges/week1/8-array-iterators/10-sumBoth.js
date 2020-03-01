// Create a function, sumBoth, that takes two arrays of numbers as arguments. Using .reduce() return the sum of all the numbers from both arrays.

let add = (a, b) => a + b;
let total = values => values.reduce(add, 0);

let sumBoth = (a, b) => add(total(a), total(b));

console.log(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
);