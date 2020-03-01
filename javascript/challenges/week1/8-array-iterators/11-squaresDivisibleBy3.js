// Create a function, squaresDivisibleBy3, that takes an array of numbers as an argument. Using .map() and .filter() return a new array containing the squares of each number, but only if the square is divisible by 3.

let square = n => Math.pow(n, 2);
let modulus3 = n => n % 3 === 0;

// let squaresDivisibleBy3 = values => values.map(n => n * n).filter(n => n % 3 === 0);

let squaresDivisibleBy3 = values => values.map(square).filter(modulus3);

console.log(
    squaresDivisibleBy3([-3, -2, -9, 3, 4, 5, 6, 7, 8, 9]), // [9, 81, 9, 36, 81]
);