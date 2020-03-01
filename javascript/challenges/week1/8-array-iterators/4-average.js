// Create a function, average, that takes an array of numbers as an argument. Using .reduce() return the average value of all the numbers.

let add = values => values.reduce((total, current) => total + current, 0);

let average = values => add(values) / values.length;

console.log(
    average([2, 3, 4, 5, 6]), // 4
);
