// Create a function, odd, that takes an array of numbers. Using .filter() return an array containing only the odd numbers.

let findOdd = (number) => number % 2 !== 0;

let odd = values => values.filter(findOdd);

console.log(
    odd([1, 2, 3]), // [1, 3]
    odd([1, 2, 3, 4, 5, 6]), // [1, 3, 5]
);