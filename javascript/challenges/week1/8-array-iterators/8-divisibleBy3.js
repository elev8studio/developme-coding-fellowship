// Create a function, divisibleBy3, that takes an array of numbers. Using .filter() return an array containing only the numbers that are divisible by 3.

let divisibleBy3 = values => values.filter(val => val % 3 === 0);

console.log(
    divisibleBy3([1, 2, 3, 4, 5, 6]), // [3, 6]
);