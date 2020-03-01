// Create a function, double, that takes an array of numbers as an argument.Using.map() Return a new array containing each number doubled.

let double = values => values.map(num => num * 2);

console.log(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
);