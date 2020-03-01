// Create a function, squares, that takes an array of numbers as an argument. Return a new array containing the square of each number.

let squares = values => {
    let squareValues = [];

    for (let i = 0; i < values.length; i += 1) {
        let current = values[i] * values[i];
        squareValues.push(current);
    }

    return squareValues;
};

console.log(
    squares([2, 3, 4]), // [4, 9, 16]
    squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
);