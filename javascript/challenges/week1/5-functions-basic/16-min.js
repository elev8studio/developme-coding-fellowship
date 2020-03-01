// Create a function min, that takes two numbers as arguments. The function should return the smallest of the numbers.

let min = (number1, number2) => number1 < number2 ? number1 : number2;

console.log(
    min(1, 2), // 1
    min(3, -2), // -2
    min(-3, -5), // -5
);