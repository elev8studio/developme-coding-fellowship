// Create a function, hypotenuse, that takes two numbers representing the "leg" sides of a right-angled triangle. Return the length of the hypotenuse. (ES6 added a Math.hypot() method, but try doing it without.)

// Hint: Pythagoras' Theorem

let hypotenuse = (side1, side2) => Math.sqrt((side1 * side1) + (side2 * side2));

// Alternative solution 1
// let hypotenuse = (side1, side2) => Math.sqrt((Math.pow(side1, 2)) + (Math.pow(side2, 2)));

// Alternative solution 2
// let hypotenuse = (side1, side2) => Math.sqrt((side1**2) + (side2**2));

console.log(
    hypotenuse(3, 4), // 5
);
