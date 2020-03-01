// Create a function, factorOf, that takes two numbers as arguments. The function should return true if the first number is a factor of the second number (i.e. the second number divided by the first has no remainder) and false if not.

let factorOf = (number1, number2) => number2 % number1 === 0;

console.log(factorOf(2, 16)); // true
console.log(factorOf(3, 16)); // false
