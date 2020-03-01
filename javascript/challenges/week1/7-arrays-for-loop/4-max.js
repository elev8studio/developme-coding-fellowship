// Create a function, max, that takes an array of numbers. Return the largest number.

// Hint: don't try and use .sort() - it won't do what you think

// let findMax = (number1, number2) => number1 > number2 ? number1 : number2;

let max = values => {
    let maxValue = values[0];

    for (let i = 0; i < values.length; i += 1) {
        let current = values[i];

        if (current > maxValue) {
            maxValue = current;
        }
    }

    return maxValue;
};

console.log(
    max([2, 4, 6, 4, 7, 5]), // 7
    max([-2, 4, 6, 4, 2, -7, 5]), // 6
    max([-2, -4, -4, -7, -5]), // -2
);