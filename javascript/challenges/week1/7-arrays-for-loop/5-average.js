// Create a function, average, that takes an array of numbers as an argument. Return the average value of all the numbers.

let average = (values) => {
    let total = 0;

    for (let i = 0; i < values.length; i += 1) {
        total += values[i];
    }
    return total / values.length;
}

console.log(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
);