// Create a function max, that takes two numbers as arguments. The function should return the highest of the numbers.

let max = (number1, number2) => number1 > number2 ? number1 : number2;

console.log(
    max(1, 2), // 2
    max(3, -2), // 3
    max(-3, -5), // -3
);