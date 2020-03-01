// Create a function, oddSquares, that takes an array of numbers as an argument. Using .map() and .filter() return a new array containing the squares of each number, but only if the square is odd.

// Long solution:

let oddSquares1 = values => {

    let i = values.map(val => val * val);

    let j = i.filter((number) => number % 2 !== 0);

    return j;

};

// Shorter solution:

let oddSquares2 = values => {
    return values
        .map(val => val * val)
        .filter((number) => number % 2 !== 0)

};

// Even shorter solution:

let square = val => val * val;
let odd = number => number % 2 !== 0;

let oddSquares = values => values.map(square).filter(odd);

console.log(
    oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
);